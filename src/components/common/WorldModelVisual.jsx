export function WorldModelVisual() {
  return (
    <div className="wm-visual-wrap">
      <svg
        viewBox="0 0 460 300"
        className="wm-visual"
        role="img"
        aria-label="World model schematic: an input image at time t feeds a latent world model which predicts the next frame at time t+1."
      >
        <g fontFamily="'Source Sans 3', sans-serif" letterSpacing="1.5">
          {/* Input image at time t */}
          <rect x="48" y="141" width="64" height="58" rx="7" fill="var(--soft)" stroke="var(--grey)" strokeWidth="1.5" />
          <circle cx="96" cy="158" r="7" fill="none" stroke="var(--grey)" strokeWidth="1.25" />
          <path d="M56 195 L80 162 L104 195" fill="none" stroke="var(--grey)" strokeWidth="1.25" />
          {/* <path d="M64 195 L88 170 L112 195" fill="none" stroke="var(--grey)" strokeWidth="1.25" opacity="0.7" /> */}
          <line x1="48" y1="195" x2="112" y2="195" stroke="var(--grey)" strokeWidth="1.25" />
          <text x="60" y="156" fill="var(--ink)" fontSize="9" fontWeight="700" letterSpacing="0">
            t
          </text>
          <text x="80" y="234" textAnchor="middle" fill="var(--muted)" fontSize="11">
            INPUT
          </text>

          {/* Data flow: observation -> world model */}
          <g stroke="var(--grey)" strokeWidth="1.5" fill="none">
            <line x1="120" y1="170" x2="168" y2="170" />
            <polygon points="172,170 163,165.5 163,174.5" fill="var(--grey)" stroke="none" />
          </g>
          <circle cy="170" r="3.5" fill="var(--accent)">
            <animate attributeName="cx" values="120;168" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.8s" repeatCount="indefinite" />
          </circle>

          {/* Latent-space ring */}
          <circle cx="230" cy="170" r="66" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 7" opacity="0.5" />

          {/* World model sphere */}
          <circle cx="230" cy="170" r="54" fill="var(--accent)" fillOpacity="0.05" stroke="var(--ink)" strokeWidth="1.5" />
          <ellipse cx="230" cy="170" rx="19" ry="54" fill="none" stroke="var(--ink)" strokeWidth="1" />
          <ellipse cx="230" cy="170" rx="54" ry="19" fill="none" stroke="var(--ink)" strokeWidth="1" />
          <ellipse cx="230" cy="170" rx="45" ry="34" fill="none" stroke="var(--ink)" strokeWidth="0.75" opacity="0.6" />

          {/* Latent nodes */}
          <g stroke="var(--ink)" strokeWidth="0.75" opacity="0.45">
            <line x1="214" y1="156" x2="244" y2="162" />
            <line x1="214" y1="156" x2="226" y2="186" />
            <line x1="244" y1="162" x2="226" y2="186" />
          </g>
          <circle cx="214" cy="156" r="3.5" fill="var(--accent)" />
          <circle cx="244" cy="162" r="3" fill="var(--ink)" />
          <circle cx="226" cy="186" r="3" fill="var(--ink)" />

          {/* Orbiting node */}
          <circle cx="230" cy="104" r="4" fill="var(--accent)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 230 170"
              to="360 230 170"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          <text x="230" y="250" textAnchor="middle" fill="var(--ink)" fontSize="11" fontWeight="700">
            WORLD MODEL
          </text>

          {/* Data flow: world model -> prediction */}
          <g stroke="var(--grey)" strokeWidth="1.5" fill="none">
            <line x1="292" y1="170" x2="340" y2="170" />
            <polygon points="344,170 335,165.5 335,174.5" fill="var(--grey)" stroke="none" />
          </g>
          <circle cy="170" r="3.5" fill="var(--accent)">
            <animate attributeName="cx" values="292;340" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
          </circle>

          {/* Predicted frame at time t+1 */}
          <rect
            x="348"
            y="141"
            width="64"
            height="58"
            rx="7"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            className="wm-dash"
          />
          <circle cx="396" cy="158" r="7" fill="none" stroke="var(--accent)" strokeWidth="1.25" opacity="0.85" />
          <path d="M356 195 L380 162 L404 195" fill="none" stroke="var(--accent)" strokeWidth="1.25" opacity="0.85" />
          <text x="380" y="180" textAnchor="middle" fill="var(--accent)" fontSize="13">
            ?
          </text>
          <text x="360" y="156" fill="var(--accent)" fontSize="9" fontWeight="700" letterSpacing="0">
            t+1
          </text>
          <text x="380" y="234" textAnchor="middle" fill="var(--muted)" fontSize="11">
            PREDICTION
          </text>
        </g>
      </svg>
    </div>
  )
}
