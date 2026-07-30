import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_NAPA_API_KEY ?? "pit-3d1c7f34-6634-49fd-a321-cac3683eb378";
const LOCATION_ID = process.env.GHL_NAPA_LOCATION_ID ?? "zpNxda6GFyHPy76N8eEM";
const PIPELINE_ID = process.env.GHL_NAPA_PIPELINE_ID ?? "uztWmU5mcjRdKHUwkB3Q";
const STAGE_ID    = process.env.GHL_NAPA_STAGE_ID    ?? "f65c7304-4d7b-42db-833c-0fcf5b57bbaf";
const SERVICE_CF  = process.env.GHL_NAPA_SERVICE_FIELD_ID ?? "JT4xuStLHpC7WeC2mB9B";
const GHL_BASE    = "https://services.leadconnectorhq.com";

const GHL_HEADERS = {
  "Authorization": `Bearer ${GHL_API_KEY}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
};

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message, service } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: "First name and email are required." }, { status: 400 });
    }

    const serviceSlug = service ?? "general-inquiry";
    const tags = ["concierge - lead", `concierge - ${serviceSlug}`];

    // 1. Create contact
    const contactRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: GHL_HEADERS,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        firstName,
        lastName: lastName ?? "",
        email,
        phone: phone ?? "",
        tags,
        customFields: [{ id: SERVICE_CF, field_value: serviceSlug }],
        source: "Napa Concierge Website",
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id;

    if (!contactId) {
      console.error("GHL contact create failed:", contactData);
      return NextResponse.json({ error: "Could not create contact." }, { status: 500 });
    }

    // 2. Add to Marketing Pipeline → New Lead stage
    await fetch(`${GHL_BASE}/opportunities/`, {
      method: "POST",
      headers: GHL_HEADERS,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        pipelineId: PIPELINE_ID,
        pipelineStageId: STAGE_ID,
        contactId,
        name: `${firstName} ${lastName ?? ""} — ${serviceSlug}`.trim(),
        status: "open",
        source: "Napa Concierge Website",
      }),
    });

    // 3. Add note with message if provided
    if (message) {
      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: GHL_HEADERS,
        body: JSON.stringify({
          body: `Concierge inquiry (${serviceSlug}):\n\n${message}`,
          userId: "",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("concierge-lead error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
