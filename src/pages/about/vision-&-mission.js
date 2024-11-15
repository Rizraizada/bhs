import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, AlertCircle } from "lucide-react";
import Dropdiv from "@/components/Dropdiv"; // Adjust the path based on your project structure

const TabContent = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ margin: "40px" }} // Use style attribute for margins
        className="tab-content"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const PolicyPoint = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="policy-point"
  >
    <AlertCircle className="alert-icon" />
    <p className="policy-text">{children}</p>
  </motion.div>
);

const marinecargo = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Marine-Cargo Insurance",
      icon: Wrench,
      color: "rose",
    },
  ];

  // Inject styles into the document head using useEffect
  useEffect(() => {
    const styles = `
 /* Global Styles */
.main-container {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  transition: box-shadow 0.3s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 auto;
}

.tab-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tab-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background-color: white;
  color: #4a5568; /* Gray 700 */
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-align: center;
}

.inactive-tab {
  color: #4a5568; /* Gray 700 */
}

.active-tab-rose {
  background-color: #f43f5e; /* Rose 500 */
  color: white;
  box-shadow: 0 0 10px rgba(244, 63, 94, 0.5);
}

.active-tab-blue {
  background-color: #3b82f6; /* Blue 500 */
  color: white;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.tab-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.active-border {
  position: absolute;
  inset: 0;
  border: 2px solid white;
  border-radius: 0.5rem;
}

.content-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748; /* Gray 800 */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.content-icon {
  width: 1.75rem;
  height: 1.75rem;
}

.policy-points {
  margin-top: 1rem;
}

.policy-point {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.alert-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #3b82f6; /* Blue 500 */
  margin-top: 0.25rem;
}

.policy-text {
  color: #2d3748; /* Gray 800 */
  line-height: 1.6;
}

.exclusion-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748; /* Gray 800 */
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .main-container {
    padding: 1.5rem;
  }

  .tab-button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .content-title {
    font-size: 1.75rem;
  }

  .content-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media (max-width: 992px) {
  .main-container {
    padding: 1.25rem;
  }

  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }

  .content-title {
    font-size: 1.5rem;
  }

  .content-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

@media (max-width: 768px) {
  .main-container {
    padding: 1rem;
  }

  .tab-navigation {
    flex-direction: column;
    gap: 0.75rem;
  }

  .tab-button {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .content-title {
    font-size: 1.25rem;
  }

  .content-icon {
    width: 1rem;
    height: 1rem;
  }
}

@media (max-width: 576px) {
  .main-container {
    padding: 0.75rem;
  }

  .tab-button {
    padding: 0.4rem;
    font-size: 0.75rem;
  }

  .content-title {
    font-size: 1rem;
  }

  .content-icon {
    width: 0.85rem;
    height: 0.85rem;
  }
}

    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <Dropdiv />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="main-container">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`tab-button ${
                    isActive ? `active-tab-${tab.color}` : "inactive-tab"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className={`tab-icon ${
                      isActive ? "text-white" : `text-${tab.color}-500`
                    }`}
                  />
                  <span>{tab.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="active-border"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <TabContent isActive={activeTab === "tab1"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="content-title">
                <Wrench className="content-icon text-rose-500" />
                Marine-Cargo
              </h2>
              <div className="policy-points">
                <PolicyPoint>
                  If there is any material misdescription of any of the property
                  hereby insured, the company shall not be liable for any loss
                  or damage resulting therefrom.
                </PolicyPoint>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#E3F2FD", // Light Blue background
                    color: "#0277BD", // Blue text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #0288D1", // Darker Blue accent color
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    fontFamily: "Arial, sans-serif",
                    whiteSpace: "pre-wrap", // Preserves line breaks in your text
                  }}
                >
                  <strong>Marine Cargo Insurance Meaning:</strong>
                  Marine insurance is often thought of as coverage for shipping
                  goods by sea. However, it offers more than that. Marine
                  insurance policies also protect goods during transportation by
                  rail, road, and air.
                  <br />
                  <br />
                  <strong>Marine Cargo Insurance Types:</strong>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Transit by Steamer or Powered Vessel:
                      </span>{" "}
                      INSTITUTE CARGO CLAUSES (A), (B) & (C)
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Transit by Rail/Lorry/Truck
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Transit by Inland Rail or Road
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Transit by Inland Cargoes (waterborne)
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Transit by Air Cargo
                      </span>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#FFF9C4", // Light Yellow background
                    color: "#F57F17", // Yellow text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #FBC02D", // Darker Yellow accent color
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <strong>INSTITUTE CARGO CLAUSES (A)</strong>
                  <br />
                  <strong>Risks Covered:</strong>
                  This insurance covers all risks of loss or damage to the
                  subject-matter insured except as excluded by the provisions of
                  Clauses 4, 5, 6, and 7 below.
                  <br />
                  <br />
                  <strong>General Average:</strong>
                  This insurance covers general average and salvage charges,
                  adjusted or determined according to the contract of carriage
                  and/or the governing law and practice, incurred to avoid or in
                  connection with the avoidance of loss from any cause except
                  those excluded in Clauses 4, 5, 6, and 7 below.
                  <br />
                  <br />
                  <strong>Both to Blame Collision Clause:</strong>
                  This insurance indemnifies the Assured, in respect of any risk
                  insured herein, against liability incurred under any Both to
                  Blame Collision Clause in the contract of carriage. In the
                  event of any claim by carriers under the said Clause, the
                  Assured agrees to notify the Insurers who shall have the
                  right, at their own cost and expense, to defend the Assured
                  against such claims.
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#FFEBEE", // Light Red background
                    color: "#D32F2F", // Red text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #C62828", // Darker Red accent color
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <strong>Exclusions:</strong>
                  <ul>
                    <li>
                      Loss damage or expense attributable to{" "}
                      <span style={{ fontWeight: "bold" }}>
                        wilful misconduct of the Assured
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Ordinary leakage, ordinary loss in weight or volume
                      </span>
                      , or ordinary wear and tear of the subject-matter insured
                    </li>
                    <li>
                      Loss damage or expense caused by insufficiency or
                      unsuitability of packing or preparation of the
                      subject-matter insured
                    </li>
                    <li>
                      Loss damage or expense caused by{" "}
                      <span style={{ fontWeight: "bold" }}>delay</span>, even
                      though the delay be caused by a risk insured against
                    </li>
                    <li>
                      Loss damage or expense caused by insolvency or financial
                      default of the owners/operators
                    </li>
                    <li>
                      Loss damage or expense directly or indirectly caused by or
                      arising from the use of any weapon or device employing
                      atomic or nuclear fission
                    </li>
                  </ul>
                  <br />
                  <strong>Termination of Contract of Carriage:</strong>
                  <br />
                  If owing to circumstances beyond the control of the Assured,
                  the contract of carriage is terminated at a port or place
                  other than the destination named therein, then this insurance
                  shall also terminate unless prompt notice is given to the
                  Insurers and continuation of cover is requested.
                  <br />
                  <br />
                  <strong>Further Exclusions:</strong>
                  <ul>
                    <li>
                      Loss damage or expense arising from unseaworthiness of
                      vessel or craft or unfitness of vessel for the safe
                      carriage of the subject-matter insured
                    </li>
                    <li>
                      Loss caused by{" "}
                      <span style={{ fontWeight: "bold" }}>
                        war, civil war, revolution, rebellion, insurrection
                      </span>
                      , or civil strife arising therefrom
                    </li>
                    <li>
                      Loss damage or expense caused by strikers, locked-out
                      workmen, or persons taking part in labour disturbances,
                      riots, or civil commotions
                    </li>
                    <li>
                      Loss caused by any act of terrorism or political,
                      ideological, or religious motive
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default marinecargo;
