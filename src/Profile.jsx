export default function Profile() {
  return (
    <div style={page}>
      {/* HERO */}
      <header style={hero}>
        <div style={heroText}>
          <p style={pill}>Digital Transformation • Product & Business Analysis • Real Estate Tech</p>
          <h1 style={h1}>Shawn</h1>
          <p style={sub}>
            I build practical systems that help Sales, Marketing, and Customer Service operate faster — from lead management
            and booking flows to customer 360 dashboards, payments, and automation.
          </p>

          <div style={ctaRow}>
            <a style={btnPrimary} href="mailto:YOUR_EMAIL_HERE">Email me</a>
            <a style={btn} href="https://www.linkedin.com/in/YOUR_LINKEDIN_HERE" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a style={btn} href="https://calendly.com/YOUR_CALENDLY_HERE" target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>

          <div style={metaRow}>
            <div style={miniCard}>
              <div style={miniTitle}>Focus</div>
              <div style={miniValue}>Sales Ops • Martech • CX</div>
            </div>
            <div style={miniCard}>
              <div style={miniTitle}>Platforms</div>
              <div style={miniValue}>MSP • Sales Buddy • CDP</div>
            </div>
            <div style={miniCard}>
              <div style={miniTitle}>Region</div>
              <div style={miniValue}>Malaysia • Cambodia</div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE (AI) */}
        <div style={heroVisual}>
          {/* Put your AI image at: public/images/hero.png */}
          <img
            src="/images/hero.png"
            alt="Abstract hero illustration"
            style={heroImg}
            onError={(e) => {
              // If image missing, hide the broken icon nicely
              e.currentTarget.style.display = "none";
            }}
          />
          <div style={heroVisualHint}>
            Add your AI hero image at <code>public/images/hero.png</code>
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <section style={section}>
        <h2 style={h2}>Highlights</h2>
        <div style={grid3}>
          <div style={card}>
            <div style={cardTitle}>Mass VP (Vacant Possession)</div>
            <ul style={ul}>
              <li>Improved appointment handling for key handovers with flexible scheduling.</li>
              <li>Enabled slot export to Excel so Customer Service can allocate PICs efficiently.</li>
              <li>Supported on-demand activation and operational control for project rollouts.</li>
            </ul>
          </div>

          <div style={card}>
            <div style={cardTitle}>Sales Buddy & Lead Ops</div>
            <ul style={ul}>
              <li>Designed lead management flows spanning registrations, bookings, and multi-buyer scenarios.</li>
              <li>Worked on WhatsApp tracking and auto-follow-up initiatives (incl. vendor platform evaluation).</li>
              <li>Built/defined operational KPIs and reporting requirements for Sales & Web Ops.</li>
            </ul>
          </div>

          <div style={card}>
            <div style={cardTitle}>Data, CDP & Customer 360</div>
            <ul style={ul}>
              <li>Defined customer/lead concepts and Customer 360 dashboard requirements engineers can build.</li>
              <li>Planned ingestion from multiple sources (web, CRM, portals, ad platforms) for profiling and activation.</li>
              <li>Supported segmentation + activation tracking needs (UTM/IDs for attribution).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={section}>
        <h2 style={h2}>Key Projects</h2>

        <div style={grid2}>
          <div style={card}>
            <div style={cardTitle}>Online Payment & Progressive Billing (ERP Integration)</div>
            <p style={p}>
              Working on online payment flows for booking, SPA signing, and progressive billing with ERP integration
              (IFCA), aligning requirements across business + technical stakeholders.
            </p>
          </div>

          <div style={card}>
            <div style={cardTitle}>Document Intelligence (ID/Passport/Slip Extraction)</div>
            <p style={p}>
              Scoped document intelligence requirements and vendor evaluation for automated extraction and verification
              workflows.
            </p>
          </div>

          <div style={card}>
            <div style={cardTitle}>Cambodia Expansion Support</div>
            <p style={p}>
              Supported operational planning for Cambodia rollout (sales practices gap discovery, IT support approach,
              on-ground constraints, and vendor engagement).
            </p>
          </div>

          <div style={card}>
            <div style={cardTitle}>Launch Operations Enablement</div>
            <p style={p}>
              Supported property launch operations: customer login, site plans, unit wishlist/interest tracking, booking
              flows, and post-launch analytics for demand insights.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={h2}>How I can help</h2>

        <div style={grid3}>
          <div style={card}>
            <div style={cardTitle}>Product / BA Delivery</div>
            <p style={p}>User stories, acceptance criteria, process mapping, edge cases, roll-out planning.</p>
          </div>
          <div style={card}>
            <div style={cardTitle}>Sales & Marketing Ops Systems</div>
            <p style={p}>Lead routing, WhatsApp / CRM workflows, booking flows, reporting & operational controls.</p>
          </div>
          <div style={card}>
            <div style={cardTitle}>Data & CDP Enablement</div>
            <p style={p}>Customer/lead definitions, customer 360 requirements, segmentation + activation tracking.</p>
          </div>
        </div>
      </section>

      {/* AI IMAGE STRIP */}
      <section style={section}>
        <h2 style={h2}>Visuals</h2>
        <p style={p}>
          Add AI-generated images into <code>public/images</code> using the filenames below.
        </p>

        <div style={imageStrip}>
          <ImageTile src="/images/cdp.png" label="CDP / Customer 360" />
          <ImageTile src="/images/payments.png" label="Payments / Progressive Billing" />
          <ImageTile src="/images/cambodia.png" label="Cambodia Expansion" />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={{ fontWeight: 700 }}>Shawn</div>
        <div style={{ opacity: 0.75 }}>
          Digital Transformation • Real Estate Tech • Malaysia / Cambodia
        </div>
      </footer>
    </div>
  );
}

function ImageTile({ src, label }) {
  return (
    <div style={tile}>
      <img
        src={src}
        alt={label}
        style={tileImg}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div style={tileLabel}>{label}</div>
      <div style={tileHint}>
        Place image at <code>{src}</code>
      </div>
    </div>
  );
}

/* ---------- styles ---------- */
const page = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", color: "#111", background: "#fff" };

const hero = {
  maxWidth: 1120,
  margin: "28px auto 0",
  padding: 16,
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: 18,
  alignItems: "stretch",
};

const heroText = {
  border: "1px solid #eee",
  borderRadius: 18,
  padding: 18,
};

const heroVisual = {
  border: "1px solid #eee",
  borderRadius: 18,
  padding: 18,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: 220,
};

const heroImg = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  borderRadius: 14,
  border: "1px solid #eee",
};

const heroVisualHint = { marginTop: 10, fontSize: 12, opacity: 0.75 };

const pill = {
  display: "inline-block",
  padding: "6px 10px",
  border: "1px solid #111",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
};

const h1 = { margin: "12px 0 0", fontSize: 40, letterSpacing: -0.6 };

const sub = { margin: "10px 0 0", lineHeight: 1.6, opacity: 0.85 };

const ctaRow = { marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" };

const btnBase = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 800,
  border: "1px solid #111",
};

const btn = { ...btnBase, color: "#111", background: "#fff" };
const btnPrimary = { ...btnBase, color: "#fff", background: "#111" };

const metaRow = { marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 };

const miniCard = { border: "1px solid #eee", borderRadius: 14, padding: 12, background: "#fff" };
const miniTitle = { fontSize: 12, opacity: 0.7, fontWeight: 700 };
const miniValue = { marginTop: 6, fontWeight: 800 };

const section = { maxWidth: 1120, margin: "18px auto 0", padding: 16 };

const h2 = { margin: "0 0 10px", fontSize: 20, letterSpacing: -0.2 };

const grid3 = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 };
const grid2 = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 };

const card = { border: "1px solid #eee", borderRadius: 18, padding: 16, background: "#fff" };
const cardTitle = { fontWeight: 900, marginBottom: 8 };

const p = { margin: 0, lineHeight: 1.6, opacity: 0.9 };

const ul = { margin: "8px 0 0", paddingLeft: 18, lineHeight: 1.7, opacity: 0.9 };

const imageStrip = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 };

const tile = { border: "1px solid #eee", borderRadius: 18, padding: 14 };
const tileImg = { width: "100%", height: 140, objectFit: "cover", borderRadius: 14, border: "1px solid #eee" };
const tileLabel = { marginTop: 10, fontWeight: 900 };
const tileHint = { marginTop: 6, fontSize: 12, opacity: 0.75 };

const footer = {
  maxWidth: 1120,
  margin: "24px auto 40px",
  padding: 16,
  borderTop: "1px solid #eee",
  opacity: 0.85,
};
