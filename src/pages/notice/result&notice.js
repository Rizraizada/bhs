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



const eng = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Engineering Insurance",
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
  }, []); // Empty dependency array means this runs once when the component mounts

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
                Engineering
              </h2>

              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  // backgroundColor: "#f9f9f9",
                  // padding: "20px",
                  borderRadius: "10px",
                  // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  color: "#333",
                }}
              >
                <div
                  className="policy-points"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      borderLeft: "5px solid #3498db",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    If there is any material misdescription of any of the
                    property hereby insured, the company shall not be liable for
                    any loss or damage resulting therefrom.
                  </div>

                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      borderLeft: "5px solid #e74c3c",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>CONTRACTOR'S ALL RISK POLICY</strong> <br />
                    <strong>GENERAL EXCLUSIONS</strong> <br />
                    The Insurer will not indemnify the insured in respect of
                    loss, damage, or liability directly or indirectly caused by
                    or arising out of or aggravated by:
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                      <li>War, invasion, or any civil commotion.</li>
                      <li>Nuclear radiation or radioactive contamination.</li>
                      <li>
                        Willful negligence by the Insured or their
                        representatives.
                      </li>
                      <li>Cessation of works, whether total or partial.</li>
                    </ul>
                    The liability of the insurer shall commence directly upon
                    the commencement of work or the unloading of items at the
                    site. The insurance shall expire on the date specified in
                    the schedule unless an extension is granted in writing by
                    the insurer.
                  </div>

                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      borderLeft: "5px solid #f39c12",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>GENERAL CONDITION</strong>
                    <p>
                      The policy's validity is contingent upon compliance with
                      all stated terms and the accuracy of responses in the
                      insured's questionnaire. The insurer reserves the right to
                      inspect and recommend actions to prevent loss.
                    </p>
                    <p>
                      The insured must notify the insurer immediately of any
                      significant changes in risk and should prevent actions
                      that would increase the risk.
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      borderLeft: "5px solid #27ae60",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>SECTION I – Material Damage</strong> <br />
                    <p>
                      The insurer agrees to indemnify the insured for unforeseen
                      and sudden physical loss or damage during the cover
                      period. However, the insurer will not be liable for:
                    </p>
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                      <li>
                        Consequential losses, penalties, or loss of contract.
                      </li>
                      <li>Faulty design or defective materials.</li>
                      <li>Wear and tear or atmospheric conditions.</li>
                      <li>Loss of files, drawings, or financial documents.</li>
                    </ul>
                  </div>

                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      borderLeft: "5px solid #8e44ad",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>SECTION II – Third Party Liability</strong> <br />
                    <p>
                      The insurer will indemnify the insured for any damages
                      payable to third parties for accidental bodily injury,
                      illness, or property damage occurring during the cover
                      period. However, exclusions include:
                    </p>
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                      <li>Any deductible stated in the policy.</li>
                      <li>Damage due to vibration or weakening of support.</li>
                      <li>
                        Injury to the insured's employees or family members.
                      </li>
                      <li>
                        Agreements outside of those stipulated in the policy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default eng;
