import React from "react";
import { Button } from "reactstrap";
import plan from "../../assets/phasenext.pdf"
const PhaseTwo = () => {

  const handleDownload = (pdfPath) => {
    // Create a link element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "phase2.pdf";
    link.target = "_blank";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document after the download
    document.body.removeChild(link);
  };
  return (
    <>
      <section className="svg-plan px-5">
        <div class="card mt-3 mb-3" style={{ width: "auto" }}>
          <center>
            <div class="card-body">
              <span>Phase 2</span>
              <p class="card-text">(Comming Soon)</p>
              <Button
                color="primary"
                onClick={() => handleDownload(plan)}
              >
                Download Pdf
              </Button>
            </div>
          </center>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 350 1684 2000"
      >
        < >
          <text
            id="layer_1"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="47.267"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan
              x="6428 6459.527 6472.667 6506.794 6543.568 6556.708 6569.848 6596.1286 6622.4089 6648.689 6661.829 6677.569 6703.849 6730.1296 6756.4099"
              y="-4404"
            >
              B.NO. 794 (191)
            </tspan>
          </text>
          <g clipPath="url(#clip_2)">
            <text
              fontFamily="ArialMT"
              fontSize="36.359"
              transform="matrix(.12 0 0 .12 16 2334)"
            >
              <tspan
                x="7333 7357.2517 7367.3596 7393.6105 7421.8977 7432.0056 7442.1135 7462.329 7482.545 7502.7609 7512.8688 7524.976 7545.192 7565.4079 7585.6237"
                y="-4527"
              >
                B.NO. 799 (188)
              </tspan>
            </text>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.72"
              d="M711.64 1218.48h0"
            ></path>
            <text
              fontFamily="ArialMT"
              fontSize="43.631"
              transform="matrix(.12 0 0 .12 16 2334)"
            >
              <tspan
                x="6817 6846.102 6858.2316 6889.733 6923.6779 6935.807 6947.9367 6972.1955 6996.454 7020.713 7032.8425 7047.3718 7059.501 7083.76 7108.0187 7132.2775 7144.4069"
                y="-4206"
              >
                B.NO. 795 ( 189 )
              </tspan>
            </text>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M712 1976.76l3.48-.24"
            data-name="centreline"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M563.56 1989l35.76-3"
            data-name="RD"
          ></path>
          <g id="layer_1" data-name="HATCH">
            <path
              d="M11369 18312l143-143h-285z"
              transform="matrix(.12 0 0 -.12 16 2334)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="0"
              d="M1380.28 136.56l17.16 17.16h-34.2z"
            ></path>
            <path
              d="M11393 18169h-166zm0 0h-166 285z"
              transform="matrix(.12 0 0 -.12 16 2334)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="0"
              d="M1383.16 153.72h0-19.92zm0 0h-19.92 34.2z"
            ></path>
            <path
              d="M11227 18169h119z"
              transform="matrix(.12 0 0 -.12 16 2334)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="0"
              d="M1363.24 153.72h14.28z"
            ></path>
            <path
              d="M11227 18169h166zm166 0h-166z"
              transform="matrix(.12 0 0 -.12 16 2334)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="0"
              d="M1363.24 153.72h19.92zm19.92 0h0-19.92z"
            ></path>
            <path
              d="M11393 18169h-47l47-141zm-47 0l47-141h-47zm47-141h-47l24-2z"
              transform="matrix(.12 0 0 -.12 16 2334)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="0"
              d="M1383.16 153.72h-5.64l5.64 16.92zm-5.64 0l5.64 16.92h-5.64zm5.64 16.92h-5.64l2.88.24z"
            ></path>
            <path
              d="M11346 18028h47zm47 0h-47z"
              transform="matrix(.12 0 0 -.12 16 2334)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="0"
              d="M1377.52 170.64h5.64zm5.64 0h0-5.64z"
            ></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1397.56 153.66c0-9.444-7.656-17.1-17.1-17.1-9.444 0-17.1 7.656-17.1 17.1 0 9.444 7.656 17.1 17.1 17.1 9.444 0 17.1-7.656 17.1-17.1"
            data-name="PLOT"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="131.845"
            transform="matrix(.12583 0 0 .11444 16 2334)"
          >
            <tspan x="10797.021" y="-19261.098">
              N
            </tspan>
          </text>
          <g id="layer_1" data-name="BLOCK NO" fontFamily="ArialMT">
            <text fontSize="47.267" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="6535 6566.527 6600.654 6624.287" y="-4466">
                ADJ.
              </tspan>
            </text>
            <text fontSize="43.631" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="6941 6970.102 7001.6037 7023.419" y="-4260">
                ADJ.
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="7421 7445.2517 7471.5026 7489.682" y="-4574">
                ADJ.
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="7329 7353.2517 7363.3596 7389.6105 7417.8977 7428.0056 7438.1135 7458.329 7478.545 7498.7609 7508.8688 7520.976 7531.084 7551.3 7571.5158 7591.7316"
                y="-4315"
              >
                B.NO. 798 ( 187)
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="7423 7447.2517 7473.5026 7491.682" y="-4362">
                ADJ.
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="7328 7352.2517 7362.3596 7388.6105 7416.8977 7427.0056 7437.1135 7457.329 7477.545 7497.7609 7507.8688 7519.976 7540.192 7560.4079 7580.6237"
                y="-4098"
              >
                B.NO. 797 (186)
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="7417 7441.2517 7467.5026 7485.682" y="-4145">
                ADJ.
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="7343 7367.2517 7377.3596 7403.6105 7431.8977 7442.0056 7452.1135 7472.329 7492.545 7512.7609 7522.8688 7534.976 7555.192 7575.4079 7595.6237"
                y="-3896"
              >
                B.NO. 796 (185)
              </tspan>
            </text>
            <text fontSize="36.359" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="7431 7455.2517 7481.5026 7499.682" y="-3943">
                ADJ.
              </tspan>
            </text>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Layer-12"
          >
            <path d="M1040.44 1725.54a.66.66 0 10-1.32 0 .66.66 0 001.32 0M1040.44 1734.9a.66.66 0 10-1.32 0 .66.66 0 001.32 0"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1106.8 1980.06a1.14 1.14 0 10-2.28 0 1.14 1.14 0 002.28 0"
            data-name="road"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1216.6 1647.78a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"
            data-name="Final Bl.Point"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1041.314 2004.758a6.31 6.31 0 00-.113-.011"
            data-name="TRUST"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M672.64 1995.66a.9.9 0 10-1.8 0 .9.9 0 001.8 0"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="BL"
          >
            <path d="M885.64 1852.32l-1.08-26.88M882.16 1766.04l1.32 31.2 57.48.84M886.84 1881.36l-1.2-29.04 58.44.96M883.48 1797.24l1.08 28.2 57.72 1.68M832.36 1883.88l-1.32-121.32M878.56 2133.12l-6.96-143.52"></path>
          </g>
          <g
            id="layer_1"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="50.903"
          >
            <text transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="6814 6847.952 6862.103 6898.855 6938.4577 6952.6086 6966.7595 6995.0617 7023.364"
                y="-2200"
              >
                B.NO. 720
              </tspan>
            </text>
            <text transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="6880 6913.952 6950.704 6976.156" y="-2268">
                ADJ.
              </tspan>
            </text>
            <text transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="7287 7320.952 7335.103 7371.855 7411.4577 7425.6086 7439.7595 7468.0617 7496.364"
                y="-2198"
              >
                B.NO. 719
              </tspan>
            </text>
            <text transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="7353 7386.952 7423.704 7449.156" y="-2266">
                ADJ.
              </tspan>
            </text>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M930.52 1773.36l2.76 7.8 7.44 2.16"
            data-name="Final Block"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="RD"
          >
            <path d="M1193.56 1990.32l22.32 7.2 31.2 13.08M1197.76 2022.36l-3.84-15.84 50.52 20.64M813.4 1984.92l115.08 9.24"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M871.6 1989.6l6.96 143.52"
            data-name="BL"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M526.96 1986.24l27.24-2.52-3.24-9.36"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M912.64 1338.24l4.56-1.92"
            data-name="BL"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M720.16 2302.92l89.76-5.16 161.04-48.6 29.28-8.28 128.28-31.32"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1128.52 2209.56l111.24-9.72"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Bl.Point"
          >
            <path d="M1208.68 1627.5a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1165.12 1634.34a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1146.28 1646.34a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1201.36 1659.78a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1207.72 1704.18a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1195 1775.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1131.88 1845.9a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1153.12 1883.94a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1160.08 1924.26a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1121.56 1655.7a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1120.84 1651.98a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1102.6 1651.86a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1035.76 1670.34a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1041.16 1694.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1030.96 1697.58a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1026.28 1688.46a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M958.12 1714.98a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M987.4 1788.78a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M962.2 1795.38a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Layer-12"
          >
            <path d="M1040.44 1973.7a.66.66 0 10-1.32 0 .66.66 0 001.32 0M1027.96 1972.5a.66.66 0 10-1.32 0 .66.66 0 001.32 0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Bl.Point"
          >
            <path d="M942.16 1783.26a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M956.44 1788.54a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M942.52 1798.02a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M943.72 1827.06a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M946.72 1865.22a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M945.64 1853.22a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M946.84 1881.54a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M888.4 1881.66a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M833.92 1883.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M785.44 1883.1a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M781.84 1754.46a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M931.96 1773.3a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M883.6 1765.98a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M832.48 1762.5a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M909.52 1715.94a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M900.76 1690.74a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M887.68 1648.62a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M926.8 1759.02a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M864.04 1570.62a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M836.44 1496.46a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M794.08 1378.98a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M871.96 1355.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M913.84 1342.74a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M811.6 1438.38a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M919.72 1234.14a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M796.6 837.3a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"
            data-name="Final Block"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Bl.Point"
          >
            <path d="M802 853.02a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M928.72 1061.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M392.8 1619.22a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M349.48 1670.22a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M463.84 1770.66a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M504.64 1832.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M552.04 1974.42a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M641.68 1966.86a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M824.68 1953.18a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M805.24 1953.18a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M872.08 1957.5a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M929.92 1994.1a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1013.08 2001.78a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1086.4 2008.98a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1164.28 2017.38a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1168.24 1986.42a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1195 1990.26a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1199.2 2022.3a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1185.4 1919.7a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M814.12 1984.14a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
            <path d="M814.84 1984.86a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M820.84 2133.42a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M880 2133.06a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M945.28 2132.58a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M658.96 1996.86a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M706.6 2296.62a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M721.36 2296.62a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M810.28 2291.58a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M970.72 2243.1a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1000.12 2234.82a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1129 2203.38a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1240.72 2193.54a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M627.64 1999.5a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
          </g>
          <g
            id="layer_1"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
          >
            <text transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="6839 6855.1437 6868.6208 6895.5749 6922.529 6949.483 6981.8186 6995.2956"
                y="-2131"
              >
                ( 172P )
              </tspan>
            </text>
            <text transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="7333 7349.1437 7362.6208 7389.5749 7416.529 7443.483 7475.8186 7489.2956"
                y="-2131"
              >
                ( 172P )
              </tspan>
            </text>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Bl.Point"
          >
            <path d="M846.52 927.3a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M872.08 966.66a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M890.56 996.3a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M903.16 1016.94a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M912.76 1033.5a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M928 1062.42a.66.66 0 10-1.32 0 .66.66 0 001.32 0M925.12 1144.38a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M916.48 1306.26a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0M985.72 1785.42a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1239.28 2193.6l.48 6.24"
            data-name="road_1"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M703.36 2303.16l16.8-.24"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M711.64 1218.48h0"
            data-name="BLOCK NO"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M802 853.02a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"
            data-name="Final Bl.Point"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M802 853.02a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M506.68 934.5a1.62 1.62 0 10-3.24 0 1.62 1.62 0 003.24 0"
            data-name="COL"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M515.8 1038.66a1.62 1.62 0 10-3.24 0 1.62 1.62 0 003.24 0"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M714.76 1218.48h0"
            data-name="BLOCK NO"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road"
          >
            <path d="M582.16 855.18a1.62 1.62 0 10-3.24 0 1.62 1.62 0 003.24 0M510.28 602.94a1.62 1.62 0 10-3.24 0 1.62 1.62 0 003.24 0M508.48 770.1a1.62 1.62 0 10-3.24 0 1.62 1.62 0 003.24 0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M709.48 528.06a.54.54 0 10-1.08 0 .54.54 0 001.08 0M693.28 594.78a.54.54 0 10-1.08 0 .54.54 0 001.08 0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="0"
          >
            <path d="M736.72 1990.26a.18.18 0 10-.36 0 .18.18 0 00.36 0M742 2119.14a.18.18 0 10-.36 0 .18.18 0 00.36 0M736.6 1990.32l-79.08 6.6M739.48 2059.68l58.08-2.4M739.84 2069.04l58.08-2.4M758.8 2058.84h0M778.24 2058.12h0M759.16 2068.2h0M778.6 2067.48h0M765.88 1335.36l-.12-.12v-.12l.12-.12h.12v.12M766.24 1335.12l-.12.36.12-.12-.12.24.36-.24M869.68 1278.84h-.24v-.12l.12-.24h.12l.12.12v.12M869.92 1278.72l-.12.36.12-.12v.24l.36-.24M1039.72 1794h44.88M1168.96 1734.96v69.72"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M481.48 1074.96h61.08M462.4 1062.48h80.16M432.88 1062.48h0M556 1074.96H407.8"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M518.08 1266.6v-33.84"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M518.08 1261.56v-186.6"
            data-name="0"
          ></path>
          <g
            id="layer_1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="NEW PLOTTING"
          >
            <path
              stroke="#f0f"
              d="M303.04 1102.32h55.2M367.6 1102.32h93.72M470.68 1102.32h47.4M290.56 1129.68h67.68M367.6 1129.68h93.72M470.68 1129.68h47.4M290.32 1157.04h67.92M367.6 1157.04h93.72M470.68 1157.04l47.4-.12"
            ></path>
            <path stroke="#000" d="M523.48 1156.92h.12"></path>
            <path
              stroke="#f0f"
              d="M290.08 1184.28h68.16M367.6 1184.28h93.72M470.68 1184.28h47.4"
            ></path>
            <path stroke="#000" d="M524.8 1184.28h.36"></path>
            <path
              stroke="#f0f"
              d="M289.84 1211.64h68.4M367.6 1211.64h93.72M470.68 1211.64h47.4M294.76 1239h63.48M367.6 1239h93.72M470.68 1239h47.4M303.16 1266.6h55.08M303.04 1102.32v27.36M290.56 1129.68l-.72 81.96M294.76 1211.64V1239M303.16 1239v27.6"
            ></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="0"
          >
            <path d="M372.4 1356.84l-.48-77.76M334.48 1266.6l8.16 12.48h29.28l.48 77.76 31.2-.12.12 18.12h36.36l.24 53.16h20.76l15.24-.12.12 21.24v21.72l15.48-.12M500.8 1483.08h38.64l.24 46.8.24 43.2M440.92 1601.52h0M434.32 1603.92h0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="dimension"
          >
            <path d="M496.6 1581.6h0M491.56 1583.28l-10.68-29.4M457.12 1562.4l-18.6-34.56M432.28 1571.28l-16.68-31.2M403.6 1581.6l-14.64-27.24M481 1554l-20.52-38.04M463.36 1500.24l-18.24-33.96M539.8 1566l-150.24 53.76-8.4 9.36-35.76-47.04M454.36 1461.36l27.12 29.16M490.24 1500l49.56 53.28M454.36 1461.36l-12-12.84M539.8 1553.28L490.24 1500M481.48 1490.52l-27.12-29.16M495.4 1520.88l-14.64-15.84M454.36 1461.36l-140.28 75.36M481.48 1490.52l-142.56 76.56M490.24 1500l-130.44 70.08M504.88 1515.72l-9.48 5.16M314.08 1536.72l31.32 45.36M299.68 1537.92l35.64 51.48M345.4 1582.08l35.76 47.04M335.32 1589.4l38.4 50.52"></path>
            <path d="M381.16 1629.12l8.4-9.36L539.8 1566M369.88 1593.6l111-39.72M376.48 1602.24l27.48-9.72M314.8 1536.66a.66.66 0 10-1.32 0 .66.66 0 001.32 0M455.08 1461.3a.66.66 0 10-1.32 0 .66.66 0 001.32 0"></path>
            <path d="M390.28 1619.7a.66.66 0 10-1.32 0 .66.66 0 001.32 0M381.88 1629.06a.66.66 0 10-1.32 0 .66.66 0 001.32 0M346.12 1582.02a.66.66 0 10-1.32 0 .66.66 0 001.32 0M403.96 1592.52l-3.6-9.84M348.88 1561.8l-18.24-33.96M371.8 1549.44l-18.24-33.96M394.72 1537.2l-18.24-33.96M417.52 1524.84l-18.12-33.96M440.44 1512.6l-18.24-33.96"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="DEM"
          >
            <path d="M359.92 1570.08l-.48.24M359.08 1570.44l-.48.36M358.24 1570.92l-.6.24M357.4 1571.4l-.6.24M356.56 1571.88l-.6.24M355.72 1572.24l-.6.36M354.76 1572.72l-.36.24M355.6 1574.76l.36.48M356.08 1575.48l.48.6M356.68 1576.32l.36.48"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M359.896 1570.009a7.26 7.26 0 00-2.791 6.737"
            data-name="dimension"
          ></path>
          <g
            id="layer_1"
            data-name="LINE"
            fontFamily="ArialMT"
            fontSize="9.695"
          >
            <text transform="rotate(-27.477 4781.326 1134.278) scale(.12)">
              <tspan x="5438.816 5445.8156" y="-4328.899">
                R{" "}
              </tspan>
              <tspan x="5448.5109 5453.9016 5456.5969 5461.9875" y="-4328.9">
                6.00
              </tspan>
            </text>
            <text transform="matrix(.07133 .0965 -.0965 .07133 16 2334)">
              <tspan x="-3418.642" y="-6026.03">
                R
              </tspan>
              <tspan
                x="-3411.6424 -3408.947 -3403.5567 -3400.8614 -3395.471"
                y="-6026.031"
              >
                {" "}
                4.50
              </tspan>
            </text>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M376.48 1602.24l-3.84 10.56"
            data-name="dimension"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M1044.4 1845.96h86.04M1039.72 1794h129.24M1039.72 1901.52h114.96M1044.4 1855.44h91.2M1039.72 1901.52v-39.84M1071.28 1901.52v-46.08M1102.84 1901.52v-46.08M1039.72 1839.72V1794M1069.96 1845.96V1794M1100.2 1845.96V1794"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1107.4 1922.04v-20.52"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1084.6 1734.96h85.8"
            data-name="road_1"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1107.52 1794v-59.04"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1084.6 1794v-59.04"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Bl.Point"
          >
            <path d="M1131.88 1845.9a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1153.12 1883.94a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="RD"
          >
            <path d="M1158.52 1913.16h0M1157.92 1920.72l-6.24-36.72-21.24-38.04 57.36-63.6"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Bl.Point"
          >
            <path d="M1170.4 1803.18a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1170.4 1734.9a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0M1156.12 1901.46a1.38 1.38 0 10-2.76 0 1.38 1.38 0 002.76 0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="dimension"
          >
            <path d="M1039.72 1855.44h.36M1040.44 1855.44h.84M1041.64 1855.44h.84M1042.84 1855.44h.72M1044.04 1855.44h.36M1039.72 1861.68v-.6M1039.72 1860.6v-.72M1039.72 1859.52v-.84M1039.72 1858.32v-.84M1039.72 1857.12v-.72M1039.72 1855.92v-.48M1044.372 1855.232a7.86 7.86 0 00-4.715 6.288M1039.72 1845.96h.36M1040.44 1845.96h.84M1041.64 1845.96h.84M1042.84 1845.96h.72M1044.04 1845.96h.36M1039.72 1839.72v.6M1039.72 1840.8v.72M1039.72 1841.88v.84M1039.72 1843.08v.84M1039.72 1844.28v.72M1039.72 1845.48v.48M1039.657 1839.76a7.86 7.86 0 004.715 6.288"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M765.88 1311.6h57.24M765.88 1344h57.24M803.32 1278.84h.72M823.12 1278.96h44.04M867.4 1278.96h.48M868.12 1278.96h.6M868.96 1278.96h.48M869.68 1278.96h.6M870.52 1278.96h.48M871.36 1278.96h.48M872.08 1278.96h.48M872.92 1278.96h.24"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="RD"
          >
            <path d="M870.52 1355.88l41.88-13.08M915.52 1283.16l.24-4.2"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="dimension"
          >
            <path d="M823.12 1278.96v27.12h50.04M823.12 1333.08h59.4M873.16 1333.08v-3.24M873.16 1285.2v-.24M873.16 1284.72v-.48M873.16 1284v-.6M873.16 1283.16v-.48M873.16 1282.44v-.6M873.16 1281.6v-.48M873.16 1280.88v-.6M873.16 1280.04v-.48M873.16 1279.32v-.36M882.52 1352.16v-22.32M882.52 1285.2v-.24M882.52 1284.72v-.48M882.52 1284v-.6M882.52 1283.16v-.48M882.52 1282.44v-.6M882.52 1281.6v-.48M882.52 1280.88v-.6M882.52 1280.04v-.48M882.52 1279.32v-.36M913.96 1312.44h-31.44M882.52 1278.96h.24M883 1278.96h.48M883.84 1278.96h.48M884.56 1278.96h.48M885.4 1278.96h.48M886.12 1278.96h.48M886.96 1278.96h.48M887.68 1278.96h.48M888.52 1278.96h.24M888.82 1278.84a6.3 6.3 0 00-6.3 6.3M873.28 1285.14a6.3 6.3 0 00-6.3-6.3M888.76 1278.96h27M882.52 1285.2v44.64M873.16 1329.84v-44.64"></path>
          </g>
          <g
            id="layer_1"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
          >
            <text transform="matrix(.1196 .00969 -.00969 .1196 16 2334)">
              <tspan
                x="6592.703 6625.039 6654.659 6686.995 6716.6159 6748.951"
                y="-3589.944"
              >
                STATE{" "}
              </tspan>
              <tspan x="6762.428 6797.43 6810.907 6848.624" y="-3589.945">
                HIGH
              </tspan>
              <tspan x="6883.626" y="-3589.945">
                W
              </tspan>
              <tspan x="6929.39 6961.7258" y="-3589.945">
                AY
              </tspan>
              <tspan x="6994.0617 7007.538 7034.493 7061.4475" y="-3589.945">
                {" "}
                144
              </tspan>
            </text>
            <text transform="rotate(5.416 -24664.112 1336.133) scale(.12)">
              <tspan x="8351.297 8380.917 8418.635" y="-3686.735">
                TO{" "}
              </tspan>
              <tspan
                x="8432.111 8464.447 8496.783 8531.785 8564.121 8588.36"
                y="-3686.735"
              >
                BAREJA
              </tspan>
              <tspan x="8620.696 8634.174 8650.317 8663.795" y="-3686.735">
                {" "}
                - -
              </tspan>
            </text>
            <text transform="matrix(.1195 -.01087 .01087 .1195 16 2334)">
              <tspan
                x="5430.5095 5446.6525 5460.1296 5476.2736 5489.7507"
                y="-2464.287"
              >
                - -{" "}
              </tspan>
              <tspan x="5503.228" y="-2464.287">
                T
              </tspan>
              <tspan x="5532.849" y="-2464.287">
                O
              </tspan>
              <tspan x="5570.566" y="-2464.287"></tspan>
              <tspan x="5584.0427 5619.044 5654.046 5691.7629" y="-2464.287">
                DHOL
              </tspan>
              <tspan x="5718.717" y="-2464.287">
                K
              </tspan>
              <tspan x="5751.053" y="-2464.287">
                A
              </tspan>
            </text>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M497.2 1712.4l-45.12 25.92"
            data-name="subplot"
          ></path>
          <text
            id="layer_1"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="42.419"
            transform="rotate(-16.781 7919.794 1112.764) scale(.12)"
          >
            <tspan x="7489.2375 7519.864 7548.157" y="1612.992">
              CAR
            </tspan>
            <tspan x="7578.7839 7604.701" y="1612.992">
              T{" "}
            </tspan>
            <tspan x="7616.494" y="1612.992">
              T
            </tspan>
            <tspan x="7642.411" y="1612.992">
              R
            </tspan>
            <tspan x="7673.0378 7701.331 7731.9577 7760.2507" y="1612.992">
              ACK{" "}
            </tspan>
            <tspan x="7772.044" y="1612.992">
              R
            </tspan>
            <tspan x="7802.6696 7835.6716" y="1612.992">
              OA
            </tspan>
            <tspan x="7863.965" y="1612.992">
              D
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            d="M199.6 62.76h1284.6v2264.76H199.6V62.76"
            data-name="0"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="dimension"
          >
            <path d="M400.36 1582.68l-30.48 10.92 6.6 8.64 27.48-9.72-3.6-9.84M490.24 1500l-9.48 5.04 14.64 15.84 9.48-5.16-14.64-15.72M453.839 1461.612a.66.66 0 001.03.171"></path>
            <path d="M453.76 1461.72l-8.64 4.56 18.24 33.96 18.12-9.72-26.64-28.68M330.64 1527.84l-13.8 7.44 22.08 31.8 9.96-5.28-18.24-33.96M357.04 1576.8l19.44 25.44"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="DEM"
          >
            <path d="M354.4 1572.96l.24.36M354.76 1573.56l.36.6M355.36 1574.4l.24.36"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="0"
          >
            <path d="M316.84 1535.28l.72 1.08M318.28 1537.44l1.56 2.16M320.56 1540.68l1.44 2.04M322.72 1543.8l1.56 2.16M325 1547.04l1.44 2.16M327.16 1550.28l1.56 2.16M329.44 1553.52l1.44 2.04M331.6 1556.64l1.56 2.16M333.88 1559.88l1.44 2.16M336.04 1563.12l1.56 2.16M338.32 1566.36l1.44 2.04M340.6 1569.48l1.44 2.16M342.76 1572.72l1.44 2.16M345.04 1575.96l1.44 2.16M347.2 1579.2l.72 1.08 1.92 2.52M350.68 1583.76l1.56 2.16M353.08 1586.88l1.56 2.16M355.36 1590l1.56 2.04M357.76 1593.12l1.56 2.04M360.16 1596.24l1.56 2.04M362.44 1599.36l1.56 2.04M364.84 1602.48l1.56 2.04M367.24 1605.6l1.56 2.04M369.52 1608.72l1.56 2.04M371.92 1611.84l1.56 2.04M374.32 1614.84l1.56 2.16M376.6 1617.96l1.56 2.16M379 1621.08l1.56 2.16M381.4 1624.2l1.92 2.52"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="NEW PLOTTING"
          >
            <path
              stroke="#f0f"
              d="M321.64 1074.96v27.36M358.24 1074.96v191.88M367.6 1074.96v191.88M414.52 1074.96v191.88M461.32 1074.96v191.88M470.68 1074.96v191.88"
            ></path>
            <path stroke="#000" d="M407.8 1074.96h-86.16"></path>
          </g>
          <g id="layer_1" data-name="0">
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.72"
              d="M803.56 2050.8l-1.68 4.44-4.32 2.04-19.32.84-19.44.72-19.32.84M739.84 2069.04l19.32-.84 19.44-.72 19.32-.84 4.44 1.68 2.04 4.32M1244.44 2027.16l-50.52-20.64 3.84 15.84M1176.16 2019.36l-13.32-1.92-77.88-8.4"
            ></path>
            <text
              fontFamily="ArialMT"
              fontSize="13.331"
              transform="rotate(85.6 -1252.247 1175.64) scale(.12)"
            >
              <tspan x="-371.197" y="-10256.709">
                6
              </tspan>
              <tspan x="-363.78529 -360.07929" y="-10256.708">
                .0
              </tspan>
              <tspan x="-352.667" y="-10256.707">
                0
              </tspan>
            </text>
            <text
              fontFamily="ArialMT"
              fontSize="13.331"
              transform="matrix(.12 0 0 .12 16 2334)"
            >
              <tspan x="8532 8539.412 8543.118 8550.53" y="-3047">
                1.37
              </tspan>
            </text>
            <text
              fontFamily="ArialMT"
              fontSize="13.331"
              transform="rotate(-2.203 60703.508 751.04) scale(.12)"
            >
              <tspan x="8510.573 8517.984" y="-2738.878">
                2.
              </tspan>
              <tspan x="8521.69 8529.103" y="-2738.878">
                33
              </tspan>
            </text>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.72"
              d="M1096.24 2217.48l32.28-7.92 111.24-9.72M1207.12 2007.72l-107.28-12.84M1166.8 1986.48l-59.4-6.12v-78.84h47.28l3.96 22.8 25.2-4.68 9.72 70.68"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.72"
              d="M1247.08 2010.6l-31.2-13.08-22.32-7.2-26.76-3.84"
            ></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M605.001 583.202a4.26 4.26 0 00-4.04 5.084"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M724.84 522.36l8.04-32.76M753.4 609.72l8.16-33.48M736.24 570.12l10.32-42.48"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M747.28 878.7a7.86 7.86 0 00-7.86-7.86M739.3 855.24a7.86 7.86 0 007.86-7.86"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M739.96 606.36l13.44 3.24M694.48 514.92l10.2-42M669.28 508.8l10.44-43.08M643.96 502.68l10.68-44.04M618.64 496.56l10.92-45M672.76 554.64l-8.04 33.48M655.6 515.16l-16.2 66.72M630.28 509.04l-8.04 33.36"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M737.8 615.48l2.16-9.12"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M729.64 648.84l8.16-33.36M704.44 642.72l8.04-33.36M679.12 636.6l8.04-33.36M653.8 630.48l8.16-33.48M628.48 624.24l8.16-33.36M711.16 519l13.68 3.36 21.72 5.28"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M592.979 485.826a6.3 6.3 0 004.794 5.636M597.76 491.52L711.16 519M602.44 502.32l106.44 25.8"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M596.92 536.28l103.92 25.2 35.4 8.64 25.32 6.12"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M599.339 567.666a6.3 6.3 0 004.794 5.636M708.88 528.12l2.28-9.12"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M692.68 594.84l16.2-66.72"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M604.12 573.36l135.84 33M604.96 583.2l132.84 32.28M600.88 587.4l2.4 30.72M602.547 502.138a6.3 6.3 0 00-7.768 6.608M594.76 508.8l4.56 59.04M589.84 444.36l3.12 41.52"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M753.4 609.6l14.04 48.48-177-43.08-13.32-172.32 39.24 5.16"
            data-name="Final Block"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M374.92 1035.12l35.16 27.36M408.64 1064.76h0"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M473.2 966.24l7.8 5.16-53.28 81.48M410.08 1062.48l63.48-96.84"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M329.44 1074.72l16.08-19.68 51-34.44L454 932.88l52.08 14.04"
            data-name="Final Block"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M481.48 1074.96h257.88M596.44 847.2l10.08-228.24-.84 17.64M596.448 847.153a7.86 7.86 0 007.853 8.207M604.24 855.36l135-.12M505.84 855.36h74.64M565.96 870.96h173.28"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M588.88 663.12l-80.88-.96M506.08 946.92l8.28 94.56.72 7.92 1.2 13.08"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Block"
          >
            <path d="M591.04 614.88l-4.92-.72-21.96-3.12-55.56-7.92-1.8 167.04-1.8 164.4 1.08 12.36M580.48 855.36l3.6-82.2 2.28-53.28 4.68-104.64M800.56 853.08l-36.48-107.52-128.52 76.8-39.12 23.4"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M582.04 819.12l-75.72-.84M584.32 767.04l-77.52-.84M586.6 715.08l-79.2-.84M505.72 870.96h74.04M689.92 1062.48l-.12-191.52M403.6 1359.84v-80.76M518.08 1266.6v-33.84M460.84 1374.84v-95.76M518.08 1470.6v-191.52M575.32 1062.48V870.96M575.32 1266.6v-191.64M575.44 1470.6l-.12-191.52"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M579.76 870.96h159.48M339.4 1062.48h70.68M432.88 1062.48h180.96"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M648.16 855.36V814.8"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M517.6 1074.96h221.76"
            data-name="road_1"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M632.56 1062.48V870.96"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M613.84 1062.48h125.52"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M439.48 1017.6l-28.68-18.72M476.08 1041.6l-28.68-18.84M453.76 995.88l-28.68-18.84M513.76 1035.24l-52.2-34.2M468.04 974.16l-28.68-18.84M510.88 1002.24l-35.04-23.04M396.52 1020.6l28.68 18.84M462.4 1062.48l27.96-42.6M473.2 966.24l15.72-24"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M432.88 1062.48h0M427.67 1052.727a6.3 6.3 0 005.27 9.753M481.48 1074.96h61.08M462.4 1062.48h80.16M747.28 1082.7a7.86 7.86 0 00-7.86-7.86M739.42 1062.48a7.86 7.86 0 007.86-7.86M747.28 1286.82a7.86 7.86 0 00-7.86-7.86M739.42 1266.48a7.86 7.86 0 007.86-7.86M747.28 1490.82a7.86 7.86 0 00-7.86-7.86M739.42 1470.6a7.86 7.86 0 007.86-7.86"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M507.88 966.72h239.28"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M606.64 1074.96h132.72"
            data-name="road_1"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M417.16 1374.84h330"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M491.92 1470.6h247.44M500.92 1483.08h238.44M607.48 1062.48h131.88M747.16 1286.88v177.48M342.64 1279.08l396.72-.12M747.16 847.44l-.12-91.68M747.16 1054.68V878.76M747.16 1258.68v-175.92M334.48 1266.6l404.88-.12"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M539.92 1566.12l-148.56 53.16-43.32 50.88 114.24 100.32 40.92 62.4 47.4 141.6"
            data-name="COL"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M1039.724 1967.469a6.66 6.66 0 006.25 6.879M765.99 1949.329a7.86 7.86 0 009.059 6.441M804.51 2072.567a6.42 6.42 0 00-6.555-6.045M819.52 2133.48l2.4 59.88M821.926 2193.258a7.86 7.86 0 008.172 7.536M830.08 2200.8l116.4-4.68M884.68 2208l-68.4 2.76-97.8 3.96M763.24 1988.04l29.52-2.16M801.394 1993.302a7.86 7.86 0 00-8.51-7.515M801.28 1993.32l2.28 57.48M797.601 2057.276a6.18 6.18 0 005.95-6.52M797.56 2057.28l-70.68 2.88M797.92 2066.64l-70.68 2.88"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M819.4 2288.4l-3.12-77.64"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M809.44 2195.4l-5.04-122.76M803.524 2201.88a6.06 6.06 0 006.018-6.525M718.12 2205.36l85.32-3.48"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M705.88 2205.84l12.24-.48"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M539.92 1668.24v-33.84M539.92 1668.18a6.3 6.3 0 006.3 6.3M773.74 1686.96a7.86 7.86 0 00-7.86 7.86M765.88 1666.74a7.86 7.86 0 007.86 7.86M773.74 1074.84a7.86 7.86 0 00-7.86 7.86M765.88 1054.62a7.86 7.86 0 007.86 7.86M773.74 1278.96a7.86 7.86 0 00-7.86 7.86M765.88 1258.62a7.86 7.86 0 007.86 7.86M747.28 1082.7a7.86 7.86 0 00-7.86-7.86M739.42 1062.48a7.86 7.86 0 007.86-7.86M747.28 1286.82a7.86 7.86 0 00-7.86-7.86M739.42 1266.48a7.86 7.86 0 007.86-7.86M747.28 1490.82a7.86 7.86 0 00-7.86-7.86M739.42 1470.6a7.86 7.86 0 007.86-7.86M747.28 1694.82a7.86 7.86 0 00-7.86-7.86M739.42 1674.6a7.86 7.86 0 007.86-7.86M739.42 1958.76a7.86 7.86 0 007.86-7.86M747.28 1898.94a7.86 7.86 0 00-7.86-7.86M559.84 1891.2h179.52M484.48 1671.444a6.3 6.3 0 005.46 3.156M524.38 1674.6a6.3 6.3 0 006.3-6.3M739.36 1674.6h-193.2M606.64 1074.96h132.72M575.8 1470.6h163.56M574.84 1483.08h164.52M773.68 1062.48h108.84"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M882.52 1074.96h44.16"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M773.68 1074.96h108.84M607.48 1062.48h131.88M765.88 1054.68V750.72M747.16 1286.88v175.92M592 1279.08l147.36-.12M747.16 1054.68V879.96M747.16 1258.68v-175.92M593.08 1266.48h146.28M747.16 1666.8v-175.92M747.16 1899v51.96"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M882.52 1266.48h33.96"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M773.68 1266.48h108.84M773.68 1278.96h99.48M765.88 1666.8v-379.92M773.68 1674.6H894.4M773.68 1687.08h124.56M765.88 1258.68v-175.92M766 1949.16l-.12-254.28M769.12 1808.52v-54M739.36 1687.08l-256.68.12M747.16 1870.92v-176.04M739.42 1878.72a7.86 7.86 0 007.86-7.86M559.84 1878.72h179.52"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1206.28 1761.84l-12.72 14.04"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Block"
          >
            <path d="M780.52 1754.52l3.48 128.64M960.76 1795.44l-5.76-6.84-11.28-4.44-3-.84.36 14.76 1.2 29.04 1.92 26.16 1.08 12 .12 16.32-58.44.12-54.48 2.16-48.48-.72-18-.96M1207.6 1704.36l-1.32-.12-6.36-44.4 4.56-3.6 10.68-8.4-7.92-20.28-43.56 6.84-18.84 12-24.72 9.36-.72-3.72-18.24-.12-66.84 18.48 5.4 24.48-10.2 2.76-4.68-9.12-68.16 26.52 27.72 70.44 1.56 3.36-25.2 6.6M1194.52 1776.96l-.96-1.08-63.12 70.08 21.24 38.04 6.84 40.2M657.52 1996.92l47.64 299.76h14.64"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M813.4 1984.92l-6.96-.48-148.92 12.48"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M928.48 1994.16l15.36 138.36-65.28.6-59.16.36-6-148.56"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1197.76 2022.36l-34.92-4.92-77.88-8.4-73.32-7.2-83.16-7.68"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M719.8 2296.68l89.04-5.16 160.32-48.36 29.52-8.28 128.76-31.44 111.84-9.84-41.52-171.24"
            data-name="Final Block"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M765.88 1754.52h14.64M769.12 1757.76h11.4M769.12 1760.88h11.52M769.12 1764.12h11.64M769.12 1767.24h11.76M769.12 1770.48H781M769.12 1773.6H781M769.12 1776.84h12M769.12 1779.96h12.12M769.12 1783.2h12.12M769.12 1786.32h12.24M769.12 1789.44h12.36M769.12 1792.68h12.36M769.12 1795.8h12.48M769.12 1799.04h12.6M769.12 1802.16h12.72M769.12 1805.4h12.72M769.12 1808.52h12.84M527.44 1634.52h12.48M466.84 1640.76l-8.16 4.68"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M515.08 1613.04l-48.24 27.72M527.44 1634.52l-30.6-53.04"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M530.56 1639.92l-3.12-5.4M484.48 1671.48l-17.64-30.72M524.32 1674.6h-34.44M530.56 1639.92v28.44"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M766 1882.2l18.12.96"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M884.32 2198.64l2.76 69.24"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M727 2064.84l-44.04 1.8M806.92 2134.08l-112.44 4.44M943.84 2132.52l4.8 116.76M691.72 2066.28l2.88 72.24M703.12 2138.16l2.76 67.68M750.76 2136.24l2.76 67.68M680.08 1995l2.88 71.64M718.48 2214.72l3.36 81.84"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M718.12 2205.36l.36 9.36"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M760.12 2213.04l3.24 81.12M739.72 2069.04l2.76 67.56"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.88 2060.16l.36 9.36"
            data-name="road_1"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M736.48 1990.32l2.88 69.36"
            data-name="subplot"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="Final Block"
          >
            <path d="M1244.44 2027.16l-50.52-20.64 3.84 15.84M1193.56 1990.32l22.32 7.2 31.2 13.08M930.52 1773.36l2.76 7.8 7.44 2.16"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="centreline"
          >
            <path d="M1099.84 1994.88l107.28 12.84M926.8 1978.32l-102.36-9.36-21.36-.12M1099.84 1994.88l-173.16-16.56M803.08 1968.84l-278.16 23.4"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M539.92 1634.52V1566M471.28 1667.28l-45.12 25.92M510.16 1734.96l-45.12 25.92M458.68 1645.44l-24-41.76"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M482.68 1687.2l-24-41.76"
            data-name="road_1"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M510.16 1734.96l-27.48-47.76"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M559.84 1891.2v-12.48"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M559.84 1973.64v-82.44M559.84 1878.72h-24.96v-95.88l-.12-95.64M465.04 1760.88l-38.88-67.68-39.48-68.52"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M1039.72 1719.3a6.3 6.3 0 006.3 6.3M1045.96 1725.6h160.32"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M1079.56 1725.6l-.12-67.56M1120.12 1725.6v-69.84M1162.36 1725.6v-90.36M1206.28 1725.6v-21.36"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1206.28 1734.96v-9.36"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M1206.28 1761.84v-26.88M1130.44 1845.96v-1.32"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M1046.02 1734.84a6.3 6.3 0 00-6.3 6.3M1045.96 1734.96h160.32M1020.458 1971.931a6.3 6.3 0 006.902-6.272M1027.24 1965.72v-272.64M1039.72 1719.36v-24.48"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1107.4 1980.36v-78.84"
            data-name="subplot"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1039.72 1968v-226.8"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M1039.72 1901.64l114.96-.12M1168.96 1794h8.4M1039.72 1794h44.88M969.28 1747.2h57.96M945.4 1888.8h81.84M943.12 1838.76h84.12M985.96 1788.84h41.28M945.4 1964.76v-83.16M1176.16 2019.36l8.4 179.04"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="PLOT"
          >
            <path d="M1383.16 153.72h14.28M1377.52 170.88v-17.16M1383.16 170.88v-17.16M1377.52 153.72h-14.28l17.04-17.16 17.16 17.16"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M823.24 1953.24v-69.48M881.68 1958.64v-76.68"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M606.64 1074.96h132.72"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M518.08 1170.72h229.08M583.96 1374.84h163.2M539.92 1578.84h207.24M684.76 1782.96h62.4M535 1782.96h87.24M765.88 966.72h104.4"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="road_1"
          >
            <path d="M773.68 1062.48h108.84M773.68 1074.96h108.84"></path>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M765.88 1170.72h156.36M823.12 1062.48v-95.76M689.92 1266.48v-191.52M632.68 1266.48l-.12-191.52M689.92 1470.6v-191.52M632.68 1470.6v-191.52M684.76 1963.32v-72.12M622.24 1968.48v-77.28M622.24 1674.6v-191.52M659.08 1878.72v-53.76M622.24 1878.72v-191.64M684.76 1674.6v-191.52M684.76 1878.72v-191.64"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M607.48 1062.48h131.88"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M1098.16 2010.48l9.36 197.88M823.12 1369.92v-90.96"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M773.68 1266.48h108.84"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M765.88 1578.84h99.24M823.24 1674.6l-.12-95.76M838.84 1763.04v-75.96M817.96 1266.48v-191.52"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M882.52 1074.96v-12.48"
            data-name="road_1"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="subplot"
          >
            <path d="M870.04 1266.48l-.12-191.52M792.64 1379.04l-26.76-.12M765.88 1438.56l44.16-.12M765.88 1526.76h80.4M622.24 1824.96h62.52"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1193.56 1990.32l-9.72-70.68-25.2 4.68h-.12"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M550.6 1974.48l89.64-7.56 163.56-13.68h19.44l47.4 4.32 234.96 22.56 61.2 6.36 26.76 3.84"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M539.92 1566.12l-148.56 53.16-43.32 50.88 114.24 100.32 40.92 62.4 47.4 141.6"
            data-name="Final Block"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M531.52 1998.36l55.92-5.16 1.56 9.48 68.28-5.76"
            data-name="RD"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M780.4 1754.52h.12l50.52 8.04 51.12 3.48 48.36 7.32-5.16-14.28-17.28-43.08-8.76-25.2-13.08-42.12-6.96-23.04-16.68-54.96-19.32-52.08-8.28-22.08-4.32-10.32-20.52-47.76-17.52-59.4 77.88-23.16 41.88-13.08.36-4.92 2.04-31.44.72-23.28 2.76-48.96 4.56-73.68.48-16.08 3.96-82.56-.6-1.08-15.72-27.24-9.6-16.56-12.6-20.64-30.6-48.96-13.44-20.04-30.6-50.76-5.4-9.24-8.16-14.28"
            data-name="Final Block"
          ></path>
          <g
            id="layer_1"
            fill="none"
            stroke="#00f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="HATCH"
          >
            <path d="M789.4 1883.16l-5.64-5.52M798.52 1883.4l-15-15M807.64 1883.52l-24.36-24.36M816.88 1883.64l-33.84-33.72M826 1883.76l-43.2-43.08M835 1883.76l-52.44-52.44M843.64 1883.4l-61.32-61.32M852.28 1883.04l-70.2-70.2M860.92 1882.56l-79.08-78.96M869.56 1882.2l-87.96-87.84M878.08 1881.84L781.36 1785M886.72 1881.48l-105.6-105.72M895.6 1881.24l-114.72-114.72M904.48 1881.12l-123.84-123.84M913.24 1880.88l-125.16-125.16M922.12 1880.76L798.88 1757.4M931 1880.52l-121.44-121.44M939.76 1880.4l-119.52-119.64M945.28 1876.8l-114.36-114.36M945.28 1867.8l-104.64-104.64M944.68 1858.2l-94.44-94.44M943.96 1848.36l-84-83.88M943.12 1838.64l-73.44-73.56M942.4 1828.8l-63.12-63M941.92 1819.44l-52.2-52.32M941.68 1810.08l-41.28-41.28M941.32 1800.72l-30.36-30.36M940.96 1791.36l-19.32-19.32M816.16 2000.16l-2.28-2.16M825.4 2000.4l-11.88-11.88M835.36 2001.36l-15.96-15.96M845.2 2002.2l-15.96-15.96M855.16 2003.16l-16.08-16.2M865.12 2004l-16.32-16.2M874.96 2004.96l-2.76-2.76-13.56-13.68M884.92 2005.8l-13.08-13.08-3.36-3.36M894.88 2006.76l-16.68-16.68M904.72 2007.6l-16.68-16.68M914.68 2008.56l-16.8-16.92M924.64 2009.4l-17.04-16.92M929.8 2005.56l-12.36-12.36M928.6 1995.36l-1.32-1.32M825.04 2133.48l-5.88-5.88M833.92 2133.36l-15.12-15.12M842.92 2133.36l-24.48-24.48M851.92 2133.24l-33.84-33.84M860.8 2133.24l-43.2-43.2M869.8 2133.12l-52.56-52.44M878.68 2133.12l-61.8-61.92M887.68 2133l-71.16-71.16M896.68 2132.88l-80.52-80.4M905.56 2132.88l-89.76-89.76M914.56 2132.76l-99.24-99.12M923.44 2132.76l-108.48-108.48M932.44 2132.64L814.6 2014.92M941.32 2132.64l-127.08-127.2M943 2125.2l-125.04-125.04M941.92 2115.12l-114.48-114.48M940.84 2104.92l-103.56-103.44M939.64 2094.84l-92.4-92.4M938.56 2084.64l-81.36-81.36M937.36 2074.56l-70.32-70.32M936.28 2064.36L877 2005.08M935.2 2054.28l-48.24-48.24M934 2044.08l-37.2-37.2M932.92 2034l-26.16-26.16M931.72 2023.8l-15-15.12M930.64 2013.72l-3.96-4.08"></path>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M314.08 1536.72l-4.2-6"
            data-name="0"
          ></path>
          <g id="layer_1" data-name="BLOCK NO" fontFamily="ArialMT">
            <text
              fill="#767676"
              fontSize="121.199"
              transform="matrix(.12 0 0 .12 16 2334)"
            >
              <tspan
                x="2957 3037.8399 3125.3455 3206.1854 3287.0252 3367.865 3401.5584 3435.2518 3475.611 3509.3045"
                y="-9690"
              >
                PHASE :- 2
              </tspan>
            </text>
            
            <text fontSize="50.903" transform="matrix(0 -.12 .12 0 16 2334)">
              <tspan
                x="4224 4252.3024 4280.6047 4294.7556 4323.0578 4351.36 4365.5109 4407.913 4439.0148 4453.1657 4501.218 4515.3688 4552.1208 4586.0729 4600.2238 4636.9758 4676.578 4710.5305"
                y="6188"
              >
                18.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="50.903" transform="matrix(0 -.12 .12 0 16 2334)">
              <tspan
                x="7019 7047.3024 7075.6047 7089.7556 7118.0578 7146.36 7160.5109 7202.913 7234.0148 7248.1657 7296.218 7310.3688 7347.1208 7381.0729 7395.2238 7431.9758 7471.578 7505.5305"
                y="6188"
              >
                18.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="50.903" transform="matrix(0 -.12 .12 0 16 2334)">
              <tspan
                x="9577 9605.302 9633.604 9647.755 9676.057 9704.358 9718.51 9760.912 9792.014 9806.165 9854.218 9868.369 9905.121 9939.073 9953.225 9989.977 10029.579 10063.531"
                y="6188"
              >
                18.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="50.903" transform="matrix(0 -.12 .12 0 16 2334)">
              <tspan
                x="11830 11858.302 11886.604 11900.755 11929.057 11957.358 11971.51 12013.912 12045.014 12059.165 12107.218 12121.369 12158.121 12192.073 12206.225 12242.977 12282.579 12316.531"
                y="6188"
              >
                18.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="5149 5175.954 5202.908 5216.3854 5243.3395 5270.2937 5283.7707 5324.1535 5353.774 5367.251 5413.015 5426.492 5461.494 5493.8298 5507.3068 5542.3088 5580.0256 5612.361"
                y="-3728"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(0 -.12 .12 0 16 2334)">
              <tspan
                x="3921 3947.9544 3974.9088 3988.3858 4015.34 4042.2945 4055.7716 4096.1545 4125.775 4139.252 4185.016 4198.493 4233.495 4265.8308 4279.3078 4314.3098 4352.0266 4384.362"
                y="8502"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text
              fontSize="48.479"
              transform="rotate(-92.071 1133.56 1159.284) scale(.12)"
            >
              <tspan x="1528.261" y="6716.619">
                1
              </tspan>
              <tspan
                x="1555.215 1582.1692 1595.6465 1622.6008 1649.5552"
                y="6716.619"
              >
                2.00{" "}
              </tspan>
              <tspan x="1663.0325 1703.4157" y="6716.618">
                MT
              </tspan>
              <tspan x="1733.036" y="6716.619"></tspan>
              <tspan
                x="1746.5137 1792.278 1805.7551 1840.7568 1873.0925"
                y="6716.618"
              >
                WIDE{" "}
              </tspan>
              <tspan x="1886.57 1921.5717 1959.2885 1991.6242" y="6716.618">
                ROAD
              </tspan>
            </text>
            <text
              fontSize="46.055"
              transform="rotate(-2.044 65438.416 718.57) scale(.12)"
            >
              <tspan x="6069.676" y="-808.068">
                9
              </tspan>
              <tspan x="6095.283" y="-808.068">
                .
              </tspan>
              <tspan x="6108.086 6133.6926" y="-808.068">
                00
              </tspan>
              <tspan x="6159.299" y="-808.068"></tspan>
              <tspan x="6172.102 6210.466 6238.6057 6251.4089" y="-808.068">
                MT W
              </tspan>
              <tspan x="6294.885" y="-808.068">
                I
              </tspan>
              <tspan x="6307.6877 6340.939 6371.6579" y="-808.068">
                DE{" "}
              </tspan>
              <tspan x="6384.461" y="-808.068">
                R
              </tspan>
              <tspan x="6417.713" y="-808.068">
                O
              </tspan>
              <tspan x="6453.543 6484.2619" y="-808.068">
                AD
              </tspan>
            </text>
            <text
              fontSize="46.055"
              transform="rotate(-2.049 65273.793 719.615) scale(.12)"
            >
              <tspan x="6100.086 6125.6926 6138.4958" y="-2019.212">
                9.0
              </tspan>
              <tspan x="6164.103" y="-2019.213">
                0
              </tspan>
              <tspan x="6189.709" y="-2019.213"></tspan>
              <tspan x="6202.512" y="-2019.213">
                M
              </tspan>
              <tspan x="6240.876 6269.0158" y="-2019.213">
                T{" "}
              </tspan>
              <tspan x="6281.819 6325.295" y="-2019.213">
                WI
              </tspan>
              <tspan x="6338.098" y="-2019.213">
                D
              </tspan>
              <tspan x="6371.3498 6402.0686" y="-2019.213">
                E{" "}
              </tspan>
              <tspan x="6414.8718 6448.123" y="-2019.213">
                RO
              </tspan>
              <tspan x="6483.954" y="-2019.213">
                A
              </tspan>
              <tspan x="6514.673" y="-2019.213">
                D
              </tspan>
            </text>
            <text
              fontSize="46.055"
              transform="rotate(-2.044 65438.416 718.57) scale(.12)"
            >
              <tspan x="6800.4245 6826.0314" y="-816.015">
                9.
              </tspan>
              <tspan x="6838.834" y="-816.015">
                0
              </tspan>
              <tspan x="6864.441 6890.0476" y="-816.015">
                0{" "}
              </tspan>
              <tspan x="6902.8508 6941.214 6969.3537 6982.1569" y="-816.015">
                MT W
              </tspan>
              <tspan x="7025.632" y="-816.015">
                I
              </tspan>
              <tspan x="7038.436" y="-816.015">
                D
              </tspan>
              <tspan x="7071.687 7102.406 7115.209" y="-816.015">
                E R
              </tspan>
              <tspan x="7148.461" y="-816.015">
                O
              </tspan>
              <tspan x="7184.292 7215.0109" y="-816.015">
                AD
              </tspan>
            </text>
            <text fontSize="46.055" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="8680 8705.606 8718.41 8744.017 8769.623 8782.427 8820.791 8848.931 8861.734 8905.21 8918.014 8951.266 8981.984 8994.788 9028.04 9063.871 9094.59"
                y="-4016"
              >
                9.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="46.055" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="8931 8956.606 8969.41 8995.017 9020.623 9033.427 9071.791 9099.931 9112.734 9156.21 9169.014 9202.266 9232.984 9245.788 9279.04 9314.871 9345.59"
                y="-5015"
              >
                9.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="4792 4818.954 4845.908 4859.3854 4886.3395 4913.2937 4926.7707 4967.1535 4996.774 5010.251 5056.015 5069.492 5104.494 5136.8298 5150.3068 5185.3088 5223.0256 5255.361"
                y="-5431"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="6540 6566.954 6593.908 6607.3854 6634.3395 6661.2937 6674.7707 6715.1535 6744.774 6758.251 6804.015 6817.492 6852.494 6884.8298 6898.3068 6933.3088 6971.0256 7003.361"
                y="-5431"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="rotate(59.183 -2046.983 1181.087) scale(.12)"
            >
              <tspan x="-3003.9534 -2982.3902" y="-6131.609">
                9.
              </tspan>
              <tspan x="-2971.608" y="-6131.609">
                0
              </tspan>
              <tspan
                x="-2950.045 -2928.4815 -2917.6998 -2885.3936 -2861.6973 -2850.916 -2822.9146 -2792.7413 -2766.8734"
                y="-6131.609"
              >
                0 MT ROAD
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="rotate(88.918 -1181.257 1175.153) scale(.12)"
            >
              <tspan x="-5724.51" y="-4420.925">
                9
              </tspan>
              <tspan
                x="-5702.9465 -5692.1647 -5670.601 -5649.0378 -5638.256 -5605.9499"
                y="-4420.925"
              >
                .00 MT
              </tspan>
              <tspan x="-5582.254" y="-4420.925"></tspan>
              <tspan x="-5571.4719 -5543.47" y="-4420.925">
                RO
              </tspan>
              <tspan x="-5513.297" y="-4420.924">
                A
              </tspan>
              <tspan x="-5487.429" y="-4420.925">
                D
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="4725 4751.954 4778.908 4792.3854 4819.3395 4846.2937 4859.7707 4900.1535 4929.774 4943.251 4989.015 5002.492 5037.494 5069.8298 5083.3068 5118.3088 5156.0256 5188.361"
                y="-7133"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text
              fontSize="48.479"
              transform="rotate(-27.905 4705.117 1134.8) scale(.12)"
            >
              <tspan
                x="5764.4626 5791.417 5818.371 5831.8479 5858.8024"
                y="-4325.076"
              >
                12.00
              </tspan>
              <tspan x="5885.757" y="-4325.076"></tspan>
              <tspan x="5899.234" y="-4325.076">
                M
              </tspan>
              <tspan x="5939.616 5969.237" y="-4325.076">
                T{" "}
              </tspan>
              <tspan x="5982.715" y="-4325.076">
                W
              </tspan>
              <tspan
                x="6028.4787 6041.9558 6076.9577 6109.293 6122.77"
                y="-4325.076"
              >
                IDE R
              </tspan>
              <tspan x="6157.7717 6195.4885 6227.8239" y="-4325.076">
                OAD
              </tspan>
            </text>
            <text
              fontSize="48.479"
              transform="rotate(54.058 -2279.493 1182.681) scale(.12)"
            >
              <tspan
                x="-3715.6807 -3699.537 -3686.0606 -3669.917 -3656.44 -3621.438 -3589.1029"
                y="-5839.779"
              >
                - - NAL
              </tspan>
              <tspan x="-3562.149" y="-5839.78">
                I
              </tspan>
              <tspan
                x="-3548.6717 -3516.3365 -3484.0008 -3470.524 -3435.522 -3397.8057 -3365.4705 -3330.4688 -3316.9913 -3300.8482 -3287.371"
                y="-5839.78"
              >
                YA ROAD - -
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="rotate(54.212 -2271.928 1182.63) scale(.12)"
            >
              <tspan x="-3460.3179 -3438.7542" y="-5947.523">
                9.
              </tspan>
              <tspan
                x="-3427.9725 -3406.4088 -3384.8453 -3374.0633 -3341.7569 -3318.0606 -3307.2789 -3279.277 -3249.104 -3223.2359"
                y="-5947.523"
              >
                00 MT ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="4152 4178.954 4205.908 4219.3854 4246.3395 4273.2937 4286.7707 4327.1535 4356.774 4370.251 4416.015 4429.492 4464.494 4496.8298 4510.3068 4545.3088 4583.0256 4615.361"
                y="-8835"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="6663 6689.954 6716.908 6730.3854 6757.3395 6784.2937 6797.7707 6838.1535 6867.774 6881.251 6927.015 6940.492 6975.494 7007.8298 7021.3068 7056.3088 7094.0256 7126.361"
                y="-8830"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="matrix(-.00136 .12 -.12 -.00136 16 2334)"
            >
              <tspan x="-8789.513" y="-7069.043">
                9
              </tspan>
              <tspan x="-8767.949" y="-7069.044">
                .
              </tspan>
              <tspan x="-8757.167" y="-7069.043">
                0
              </tspan>
              <tspan
                x="-8735.603 -8714.04 -8703.257 -8670.95 -8647.254 -8636.472"
                y="-7069.044"
              >
                0 MT R
              </tspan>
              <tspan x="-8608.47 -8578.297 -8552.428" y="-7069.043">
                OAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="4096 4122.954 4149.908 4163.3854 4190.3395 4217.2937 4230.7707 4271.1535 4300.774 4314.251 4360.015 4373.492 4408.494 4440.8298 4454.3068 4489.3088 4527.0256 4559.361"
                y="-10522"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="6489 6515.954 6542.908 6556.3854 6583.3395 6610.2937 6623.7707 6664.1535 6693.774 6707.251 6753.015 6766.492 6801.494 6833.8298 6847.3068 6882.3088 6920.0256 6952.361"
                y="-10532"
              >
                12.00 MT WIDE ROAD
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="rotate(-57.03 2156 1152.275) scale(.12)"
            >
              <tspan x="11100.184" y="-2959.266">
                9
              </tspan>
              <tspan x="11121.747" y="-2959.266">
                .
              </tspan>
              <tspan x="11132.528" y="-2959.265">
                0
              </tspan>
              <tspan x="11154.092 11175.654" y="-2959.265">
                0{" "}
              </tspan>
              <tspan x="11186.437" y="-2959.265">
                M
              </tspan>
              <tspan x="11218.742" y="-2959.265">
                T
              </tspan>
              <tspan x="11242.438" y="-2959.265"></tspan>
              <tspan x="11253.22 11281.222" y="-2959.265">
                RO
              </tspan>
              <tspan x="11311.396" y="-2959.265">
                A
              </tspan>
              <tspan x="11337.264" y="-2959.265">
                D
              </tspan>
            </text>
            <text fontSize="48.479" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="5125 5151.954 5178.908 5192.3854 5219.3395 5246.2937 5259.7707 5300.1535 5329.774 5343.251 5389.015 5402.492 5437.494 5469.8298 5483.3068 5518.3088 5556.0256 5588.361"
                y="-12242"
              >
                15.00 MT WIDE ROAD
              </tspan>
            </text>
            <text
              fontSize="48.479"
              transform="rotate(-87.242 1232.562 1158.605) scale(.12)"
            >
              <tspan
                x="13186.488 13213.442 13240.396 13253.874 13280.828 13307.781"
                y="4182.441"
              >
                15.00{" "}
              </tspan>
              <tspan x="13321.259 13361.642" y="4182.441">
                MT
              </tspan>
              <tspan x="13391.262" y="4182.442"></tspan>
              <tspan x="13404.739 13450.504 13463.981 13498.983" y="4182.441">
                WIDE
              </tspan>
              <tspan
                x="13531.317 13544.796 13579.797 13617.514 13649.849"
                y="4182.442"
              >
                {" "}
                ROAD
              </tspan>
            </text>
            <text
              fontSize="48.479"
              transform="rotate(86.545 -1231.589 1175.498) scale(.12)"
            >
              <tspan
                x="-14995.705 -14968.751 -14941.796 -14928.319 -14901.365 -14874.412"
                y="-5667.096"
              >
                12.00{" "}
              </tspan>
              <tspan x="-14860.936" y="-5667.096">
                M
              </tspan>
              <tspan x="-14820.552" y="-5667.097">
                T
              </tspan>
              <tspan x="-14790.932" y="-5667.096"></tspan>
              <tspan x="-14777.455 -14731.691" y="-5667.097">
                WI
              </tspan>
              <tspan x="-14718.215" y="-5667.097">
                D
              </tspan>
              <tspan x="-14683.212 -14650.877" y="-5667.097">
                E{" "}
              </tspan>
              <tspan x="-14637.4" y="-5667.097">
                R
              </tspan>
              <tspan x="-14602.398" y="-5667.097">
                O
              </tspan>
              <tspan x="-14564.682 -14532.346" y="-5667.096">
                AD
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="rotate(13.513 -9842.225 1234.526) scale(.12)"
            >
              <tspan x="1783.699 1805.2622 1816.0442 1837.6074" y="-15357.962">
                9.00
              </tspan>
              <tspan x="1859.1707 1869.9526 1902.259" y="-15357.961">
                {" "}
                MT
              </tspan>
              <tspan x="1925.956" y="-15357.962"></tspan>
              <tspan x="1936.738" y="-15357.961">
                R
              </tspan>
              <tspan x="1964.739" y="-15357.962">
                O
              </tspan>
              <tspan x="1994.9124 2020.7805" y="-15357.961">
                AD
              </tspan>
            </text>
            <text
              fontSize="38.783"
              transform="rotate(13.513 -9842.225 1234.526) scale(.12)"
            >
              <tspan x="1426.0518 1447.615 1458.3967 1479.9602" y="-16007.369">
                9.00
              </tspan>
              <tspan x="1501.523" y="-16007.367"></tspan>
              <tspan
                x="1512.3057 1544.612 1568.3084 1579.0903 1607.0913 1637.2649"
                y="-16007.368"
              >
                MT ROA
              </tspan>
              <tspan x="1663.133" y="-16007.367">
                D
              </tspan>
            </text>
          </g>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9802 9852.54" y="-1883">
              1A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1207.96 2104.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9295 9345.54" y="-1883">
              01
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1146.52 2104.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8357 8407.54" y="-1883">
              02
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1033.96 2104.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7155 7205.54" y="-1363">
              03
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M889.72 2166.9a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6923 6973.54" y="-751">
              04
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M861.88 2240.34a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7445 7495.54" y="-858">
              4A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M925.12 2227.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6408 6458.54" y="-667">
              05
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M800.08 2250.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5991 6041.54" y="-644">
              5A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M750.64 2253.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            fill="#0f0"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
            transform="rotate(81.848 -1338.081 1176.228) scale(.12)"
          >
            <tspan x="-1042.7632 -1007.7611" y="-5760.067">
              CO
            </tspan>
            <tspan x="-970.044" y="-5760.067">
              M
            </tspan>
            <tspan x="-929.661" y="-5760.067">
              M
            </tspan>
            <tspan x="-889.27816 -851.5613 -816.55929 -803.0821" y="-5760.067">
              ON P
            </tspan>
            <tspan x="-770.746" y="-5760.066">
              L
            </tspan>
            <tspan x="-743.79196 -706.0751" y="-5760.067">
              OT
            </tspan>
          </text>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6306 6356.54" y="-1340">
              06
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M787.84 2169.54a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5886 5936.54" y="-1339">
              6A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M738.04 2169.78a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6251 6301.54" y="-1899">
              07
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M781.12 2102.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5768 5818.54" y="-1914">
              7A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M723.88 2100.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5726 5776.54" y="-2516">
              7B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M718.84 2028.54a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6223 6273.54" y="-2568">
              7C
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M778.84 2022.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9335 9385.54" y="-3250">
              08
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1151.32 1940.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8758 8808.54" y="-3269">
              09
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1082.08 1938.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8594 8634.432 8674.863 8695.079" y="-3762">
              10/1
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1064.8 1879.74a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8855 8895.432 8935.863 8956.079" y="-3762">
              10/2
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1096.12 1879.74a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9144 9184.432 9224.863 9245.079" y="-3762">
              10/3
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1130.8 1879.74a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="59.387"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8587 8620.02 8653.039 8692.65 8709.16" y="-4256">
              10A/1
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1064.8 1821.06a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="59.387"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8835 8868.02 8901.039 8940.65 8957.16" y="-4256">
              10A/2
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1094.56 1821.06a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="59.387"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9142 9175.02 9208.039 9247.65 9264.16" y="-4256">
              10A/3
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1131.28 1821.06a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8649 8689.432 8729.863" y="-4734">
              10B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1070.68 1763.22a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="59.387"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8918 8951.02 8984.039 9026.916 9043.426" y="-4736">
              10C/2
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1104.64 1763.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9695 9735.432 9775.863" y="-4734">
              10E
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1196.32 1763.22a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <g id="layer_1" data-name="text_1" fontFamily="ArialMT">
            <text fontSize="59.387" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan
                x="9181 9214.02 9247.039 9289.916 9306.426 9339.445 9374.127 9407.146 9440.166 9483.043 9499.553"
                y="-4736"
              >
                10C/1+10D/1
              </tspan>
            </text>
            <text fontSize="72.719" transform="matrix(.12 0 0 .12 16 2334)">
              <tspan x="8658 8698.432 8738.863" y="-5296">
                10I
              </tspan>
            </text>
          </g>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1070.08 1695.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8966 9006.432 9046.863" y="-5296">
              10H
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1108.96 1695.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9300 9340.432 9380.863" y="-5296">
              10G
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1149.28 1695.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="9652 9692.432 9732.863" y="-5296">
              10F
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1190.8 1695.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8115 8155.4318 8195.863" y="-5046">
              10J
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1005.88 1725.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8165 8205.432 8245.863" y="-4685">
              10K
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1012.6 1768.98a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8033 8073.4318 8113.8635" y="-4290">
              10L
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M996.28 1816.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8004 8044.4318 8084.8635" y="-3909">
              10M
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M994 1862.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="8003 8053.54" y="-3394">
              11
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M991.48 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7429 7479.54" y="-3394">
              12
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M922.6 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6913 6963.54" y="-3394">
              13
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M860.68 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6398 6448.54" y="-3394">
              14
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M798.88 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5757 5807.54" y="-3394">
              15
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M721.96 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5257 5307.54" y="-3394">
              16
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M661.96 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4733 4783.54" y="-3394">
              17
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M599.08 1923.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            fill="#0f0"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
            transform="matrix(.0517 .1083 -.1083 .0517 16 2334)"
          >
            <tspan
              x="-2460.5367 -2425.5347 -2387.8179 -2347.4349 -2307.0518 -2269.335 -2234.3333"
              y="-5616.712"
            >
              COMMON{" "}
            </tspan>
            <tspan x="-2220.856 -2188.5206 -2161.566" y="-5616.713">
              PLO
            </tspan>
            <tspan x="-2123.849" y="-5616.713">
              T
            </tspan>
          </text>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4650 4700.54" y="-4172">
              18
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M589.12 1829.82a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5794 5844.54" y="-4172">
              20
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.4 1829.82a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5148 5198.54" y="-3986">
              19
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M648.88 1852.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5400 5440.4318 5480.8635" y="-3993">
              19A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M680.8 1852.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6504 6554.54" y="-5067">
              21
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M811.6 1722.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7081 7131.54" y="-5067">
              22
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M880.84 1722.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6461 6511.54" y="-5867">
              24
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M806.44 1626.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6924 6974.54" y="-5867">
              23
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M862 1626.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5794 5844.54" y="-4940">
              25
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.4 1737.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5266 5316.54" y="-4940">
              26
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M663.04 1737.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4650 4700.54" y="-4940">
              27
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M589.12 1737.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="59.387"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3796 3829.0194 3862.0386 3901.6497 3918.1593" y="-4957">
              27A/1
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M489.88 1736.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="59.387"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3628 3661.0194 3694.0386 3733.6497 3750.1593" y="-5223">
              27A/2
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M469.72 1705.02a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3379 3419.432 3459.8638" y="-5740">
              27B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M438.28 1642.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3781 3821.432 3861.8638" y="-5980">
              27C
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M486.76 1613.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3977 4017.432 4057.8638" y="-5710">
              27D
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M510.28 1645.98a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <g
            id="layer_1"
            fill="#0f0"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
          >
            <text transform="matrix(.0167 .11883 -.11883 .0167 16 2334)">
              <tspan x="-3067.833" y="-4836.91">
                C
              </tspan>
              <tspan x="-3032.831" y="-4836.909">
                O
              </tspan>
              <tspan x="-2995.1143 -2954.7315" y="-4836.91">
                MM
              </tspan>
              <tspan
                x="-2914.3487 -2876.632 -2841.6302 -2828.1534"
                y="-4836.909"
              >
                ON P
              </tspan>
              <tspan x="-2795.818" y="-4836.909">
                L
              </tspan>
              <tspan x="-2768.8638 -2731.1473" y="-4836.909">
                OT
              </tspan>
            </text>
            <text transform="rotate(59.304 -2041.949 1181.053) scale(.12)">
              <tspan x="-3265.6207 -3230.6187" y="-5480.974">
                CO
              </tspan>
              <tspan x="-3192.902" y="-5480.974">
                M
              </tspan>
              <tspan x="-3152.519 -3112.1358" y="-5480.974">
                MO
              </tspan>
              <tspan x="-3074.419 -3039.4176" y="-5480.974">
                N{" "}
              </tspan>
              <tspan x="-3025.94 -2993.6046" y="-5480.974">
                PL
              </tspan>
              <tspan x="-2966.65 -2928.9337" y="-5480.974">
                OT
              </tspan>
            </text>
            <text transform="rotate(64.413 -1844.697 1179.7) scale(.12)">
              <tspan
                x="-3849.274 -3814.2716 -3776.5555 -3736.1724"
                y="-6444.426"
              >
                COMM
              </tspan>
              <tspan
                x="-3695.789 -3658.0728 -3623.0709 -3609.5943 -3577.2584 -3550.304 -3512.5875"
                y="-6444.425"
              >
                ON PLOT
              </tspan>
            </text>
          </g>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5794 5844.54" y="-5876">
              30
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.4 1625.22a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5266 5316.54" y="-5876">
              29
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M663.04 1625.22a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4650 4700.54" y="-5876">
              28
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M589.12 1625.22a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6461 6511.54" y="-6486">
              31
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M806.44 1552.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6461 6511.54" y="-7059">
              32
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M806.44 1483.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5794 5844.54" y="-6698">
              33
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.4 1526.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5266 5316.54" y="-6698">
              34
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M663.04 1526.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4636 4676.4318 4716.8635" y="-6705">
              35B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M589.12 1526.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6315 6355.4318 6395.8635" y="-7674">
              32A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M790.6 1410.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3884 3934.5399" y="-7608">
              36
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M497.2 1417.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-7608">
              37
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 1417.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4846 4896.54" y="-7608">
              38
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M612.64 1417.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5339 5389.54" y="-7608">
              39
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 1417.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5791 5841.54" y="-7608">
              40
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.04 1417.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6415 6455.4318 6495.8635" y="-8632">
              41A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M802.6 1295.34a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6415 6455.4318 6495.8635" y="-8355">
              41B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M802.6 1328.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6413 6453.4318 6493.8635" y="-8093">
              41C
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M802.6 1360.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6866 6906.4318 6946.8635" y="-8650">
              42A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M856.72 1293.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6866 6906.4318 6946.8635" y="-8446">
              42B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M856.72 1317.78a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6864 6904.4318 6944.8635" y="-8203">
              42C
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M856.72 1346.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7280 7320.4318 7360.8635" y="-8353">
              42D
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M906.64 1328.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7284 7324.4318 7364.8635" y="-8621">
              42E
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M906.88 1296.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7264 7314.54" y="-9286">
              43
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M902.8 1216.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6852 6902.54" y="-9286">
              44
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M853.36 1216.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6438 6488.54" y="-9286">
              45
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M803.68 1216.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-8409">
              49
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4846 4896.54" y="-8409">
              48
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M612.64 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5339 5389.54" y="-8409">
              47
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5791 5841.54" y="-8409">
              46
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.04 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3876 3926.5399" y="-8409">
              50
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M496.24 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3408 3458.5399" y="-8409">
              51
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M440.08 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3045 3095.5399" y="-8409">
              52
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M396.52 1321.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-9268">
              53
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 1218.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4846 4896.54" y="-9268">
              54
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M612.64 1218.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5339 5389.54" y="-9268">
              55
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 1218.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5791 5841.54" y="-9268">
              56
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.04 1218.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="7264 7314.54" y="-10059">
              59
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M902.8 1123.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6852 6902.54" y="-10059">
              58
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M853.36 1123.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6438 6488.54" y="-10059">
              57
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M803.68 1123.38a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6951 7001.54" y="-10978">
              60
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M865.24 1013.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6438 6488.54" y="-10978">
              61
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M803.68 1013.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M714.76 1125.12h0"
            data-name="BLOCK NO"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-10046">
              65
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 1124.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4846 4896.54" y="-10046">
              64
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M612.64 1124.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5339 5389.54" y="-10046">
              63
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 1124.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5791 5841.54" y="-10046">
              62
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.04 1124.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="2950 2990.432 3030.8638" y="-10658">
              65B
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M386.8 1052.34a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3147 3187.432 3227.8638" y="-10762">
              65C
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M410.68 1039.74a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3278 3318.432 3358.8638" y="-10939">
              65D
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M426.4 1018.5a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3398 3438.432 3478.8638" y="-11121">
              65E
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M440.56 996.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3516 3556.432 3596.8638" y="-11297">
              65F
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M454.48 975.54a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3658 3698.432 3738.8638" y="-11489">
              65G
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M472.24 952.62a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3917 3957.432 3997.8638" y="-11371">
              65H
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M503.08 966.66a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3871 3911.432 3951.8638" y="-11075">
              65I
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M495.64 1002.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3707 3747.432 3787.8638" y="-10907">
              65J
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M476.92 1022.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3552 3592.432 3632.8638" y="-10734">
              65K
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M459.04 1043.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3931 3971.432 4011.8638" y="-10704">
              65L
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M504.04 1046.7a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M714.76 1012.44h0"
            data-name="BLOCK NO"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-10985">
              66
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 1012.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4846 4896.54" y="-10985">
              67
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M612.64 1012.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5339 5389.54" y="-10985">
              68
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 1012.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5791 5841.54" y="-10985">
              69
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.04 1012.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6438 6488.54" y="-11791">
              70
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M803.68 915.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M714.76 916.44h0"
            data-name="BLOCK NO"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-11785">
              74
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 916.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4846 4896.54" y="-11785">
              73
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M612.64 916.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5339 5389.54" y="-11785">
              72
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 916.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5791 5841.54" y="-11785">
              71
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M726.04 916.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4332 4382.54" y="-12437">
              75
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M550.96 838.02a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-12809">
              76
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 793.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-13237">
              77
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 742.02a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-13668">
              78
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 690.3a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4360 4410.54" y="-14091">
              79
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M554.32 639.54a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M707.32 822.36h0"
            data-name="BLOCK NO"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5729 5779.54" y="-12569">
              80
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M718.6 822.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M629.08 832.32h0"
            data-name="BLOCK NO"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5063 5103.4318 5143.8635" y="-12408">
              80A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M640.36 842.34a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4968 5018.54" y="-14389">
              81
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M627.28 603.78a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5193 5243.54" y="-14325">
              82
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M654.28 611.34a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5406 5456.54" y="-14272">
              83
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M679.84 617.7a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5616 5666.54" y="-14216">
              84
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M705.04 624.54a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5818 5868.54" y="-14171">
              85
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M729.28 629.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6036 6086.54" y="-14122">
              86
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M755.32 635.82a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5862 5912.54" y="-14534">
              87
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M734.56 586.26a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5501 5551.54" y="-14630">
              88
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M691.24 574.86a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5283 5333.54" y="-14678">
              89
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M664.96 569.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4987 5037.54" y="-14761">
              90
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M629.44 559.14a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4902 4952.54" y="-15071">
              91
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M619.36 521.94a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5136 5186.54" y="-15012">
              92
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M647.44 529.02a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5444 5494.54" y="-14944">
              93
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M684.4 537.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M719.2 535.56h0"
            data-name="BLOCK NO"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="72.719"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5814 5854.4318 5894.8635" y="-14880">
              93A
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M730.48 545.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 -.00118 .00118 .12 16 2334)"
          >
            <tspan x="5930.266 5980.8059" y="-15195.208">
              94
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M724.72 500.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5537 5587.54" y="-15322">
              95
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M695.56 491.7a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5340 5390.54" y="-15377">
              96
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M671.8 485.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="5126 5176.54" y="-15442">
              97
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M646.24 477.42a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="4881 4931.54" y="-15504">
              98
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M616.84 469.98a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="2735 2795.6297" y="-6595">
              A1
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M359.92 1539.06a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="2926 2986.6297" y="-6698">
              A2
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M382.84 1526.7a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3116 3176.6297" y="-6800">
              A3
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M405.64 1514.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3307 3367.6297" y="-6903">
              A4
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M428.56 1502.1a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3498 3558.6297" y="-7005">
              A5
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M451.48 1489.86a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3973 4033.6297" y="-6574">
              A6
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M508.48 1541.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3465 3525.6297" y="-6199">
              A7
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M447.52 1586.58a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3635 3695.6297" y="-6582">
              A8
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M467.92 1540.62a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="90.899"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3447 3507.6297" y="-6494">
              A9
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M445.36 1551.18a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="78.779"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="3208 3260.5457 3304.3468" y="-6404">
              A10
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M418.36 1562.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <text
            id="layer_1"
            data-name="text_1"
            fontFamily="ArialMT"
            fontSize="78.779"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="2963 3015.5457 3059.3468" y="-6304">
              A11
            </tspan>
          </text>
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M389.08 1574.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"
            data-name="0"
          ></path>
          <g
            id="layer_1"
            fill="#0f0"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
          >
            <text transform="rotate(59.282 -2042.87 1181.06) scale(.12)">
              <tspan x="-4300.236 -4265.2346" y="-5605.039">
                C.
              </tspan>
              <tspan x="-4251.757" y="-5605.038">
                P
              </tspan>
            </text>
            <text transform="rotate(59.282 -2042.87 1181.06) scale(.12)">
              <tspan x="-4257.746 -4222.7448 -4209.267" y="-6813.954">
                C.P
              </tspan>
            </text>
            <text transform="rotate(59.282 -2042.87 1181.06) scale(.12)">
              <tspan x="-3911.034 -3876.0318 -3862.5543" y="-6908.052">
                C.P
              </tspan>
            </text>
            <text transform="matrix(.1166 -.0284 .0284 .1166 16 2334)">
              <tspan x="4430.378 4465.3796 4478.8566" y="-5258.928">
                C.P
              </tspan>
            </text>
          </g>
          <g
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            data-name="0"
          >
            <path d="M481.48 1490.52l10.44-19.92M490.24 1500l10.56-16.92M1136.32 1763.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0M1159.12 1763.46a8.58 8.58 0 10-17.16 0 8.58 8.58 0 0017.16 0"></path>
          </g>
          <text
            id="layer_1"
            fill="#767676"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="24.239"
            transform="matrix(.12 0 0 .12 16 2334)"
          >
            <tspan x="6292 6308.1677 6325.668 6344.526" y="-4596">
              SHOP
            </tspan>
          </text>
         
        
       
    
       

       
        {/* from here */}
                   
          <path
            id="layer_1"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.72"
            d="M1206.16 1704.24l35.76 2.04-.36 14.64 2.52 10.32-4.32 5.52-25.56 51.84-7.68 2.4-12.96-15.12 12.6-14.04v-57.6"
            data-name="A_CP"
          ></path>
          <text
            id="layer_1"
            fill="#0f0"
            data-name="BLOCK NO"
            fontFamily="ArialMT"
            fontSize="48.479"
            transform="matrix(.00098 .12 -.12 .00098 16 2334)"
          >
            <tspan
              x="-5089.19 -5054.188 -5016.471 -4976.088 -4935.705 -4897.9885 -4862.9865 -4849.5095 -4817.174 -4790.219 -4752.5026"
              y="-10058.811"
            >
              COMMON PLOT
            </tspan>
          </text>
        </>
      </svg>
    </>
  );
};

export default PhaseTwo;
