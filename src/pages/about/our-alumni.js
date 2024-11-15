import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Shield, AlertCircle } from "lucide-react";
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

const Firensurance = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Fire Policy",
      icon: Flame,
      color: "rose",
    },
    {
      id: "tab2",
      title: "Industrial All Risks (IAR) Insurance Policy",
      icon: Shield,
      color: "blue",
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

    // Cleanup function to remove the styles when component unmounts
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
                <Flame className="content-icon text-rose-500" />
                Fire Policy Coverage
              </h2>

              <div className="policy-points">
                <PolicyPoint>
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#f9f9f9", // Light grey background
                      color: "#333",
                      borderRadius: "8px",
                      borderLeft: "5px solid #00796B", // Teal accent color
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <h3 style={{ color: "#00796B", marginBottom: "10px" }}>
                      Misdescription of Property
                    </h3>
                    <p>
                      If there is any material misdescription of any of the
                      property hereby insured, the company shall not be liable
                      for any loss or damage resulting therefrom.
                    </p>
                  </div>
                </PolicyPoint>

                <PolicyPoint>
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#E0F7FA", // Light cyan background
                      color: "#00796B",
                      borderRadius: "8px",
                      borderLeft: "5px solid #00897B", // Darker teal accent color
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "20px",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <h3 style={{ color: "#00796B", marginBottom: "10px" }}>
                      Notice and Premium Receipt
                    </h3>
                    <p>
                      The insured shall give notice to the Corporation/Company
                      of any insurance or insurances already effected, or which
                      may subsequently be effected, covering any of the property
                      hereby insured. Unless such notice is given and the
                      particulars of such insurance or insurances are stated in
                      or endorsed on this policy by or on behalf of the
                      Corporation/Company before the occurrence of any loss or
                      damage, all benefit under this policy shall be forfeited.
                    </p>

                    <div
                      style={{
                        backgroundColor: "#FFEB3B", // Yellow background for the important part
                        padding: "15px",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        marginTop: "20px",
                      }}
                    >
                      <p>
                        No payment in respect of any premium shall be deemed to
                        be payment to the insurer unless a printed form of
                        receipt for the same, signed by an Official or duly
                        authorized person of the insurer, has been given to the
                        insured.
                      </p>
                    </div>
                  </div>
                </PolicyPoint>

                <PolicyPoint>
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#FFEBEE", // Light red background
                      color: "#D32F2F",
                      borderRadius: "8px",
                      borderLeft: "5px solid #D32F2F", // Red accent color
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "20px",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <h3 style={{ color: "#D32F2F", marginBottom: "10px" }}>
                      Exclusions from Insurance
                    </h3>
                    <p>This insurance does not cover the following:</p>
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                      <li>
                        Loss by theft during or after the occurrence of a fire.
                      </li>
                      <li>
                        Loss or damage to property occasioned by its own
                        fermentation, natural heating, or spontaneous combustion
                        (except as may be provided in accordance with Condition
                        7 ‘f’) or by its undergoing any heating or drying
                        process.
                      </li>
                      <li>
                        Loss or damage occasioned by or through or in
                        consequence of:
                        <ul>
                          <li>
                            The burning of property by order of any public
                            authority
                          </li>
                          <li>Subterranean Fire</li>
                        </ul>
                      </li>
                      <li>
                        Loss or damage directly or indirectly caused by nuclear
                        weapons material.
                      </li>
                    </ul>
                  </div>
                </PolicyPoint>

                <PolicyPoint>
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#FFF3E0", // Light orange background
                      color: "#E65100",
                      borderRadius: "8px",
                      borderLeft: "5px solid #E65100", // Darker orange accent color
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "20px",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <h3 style={{ color: "#E65100", marginBottom: "10px" }}>
                      Force Majeure Exclusions
                    </h3>
                    <p>
                      This insurance does not cover any loss or damage
                      occasioned by or through or in consequence, directly or
                      indirectly, of any of the following occurrences:
                    </p>
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                      <li>
                        Earthquake, volcanic eruption, or other convulsion of
                        nature.
                      </li>
                      <li>
                        Typhoon, hurricane, tornado, cyclone, or other
                        atmospheric disturbance.
                      </li>
                      <li>
                        War, invasion, act of foreign enemy, hostilities, or
                        warlike operations.
                      </li>
                      <li>
                        Mutiny, riot, military or popular rising, insurrection,
                        rebellion, revolution.
                      </li>
                    </ul>
                    <p
                      style={{
                        marginTop: "10px",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Any loss or damage happening during the existence of
                      abnormal conditions caused by or through any of the said
                      occurrences shall be deemed to be loss or damage not
                      covered by this insurance, except to the extent that the
                      insured proves that such loss or damage happened
                      independently of such abnormal conditions.
                    </p>
                  </div>
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>

          <TabContent isActive={activeTab === "tab2"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="content-title">
                <Shield className="content-icon text-blue-500" />
                Industrial All Risks (IAR) Insurance Policy
              </h2>

              <div className="policy-points">
                <h3 className="exclusion-title">
                  Exclusions & Excluded Causes
                </h3>

                {/* Exclusion Cause Group 1 (Red-Pink Style) */}
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#F8D7DA", // Light red-pink background
                    color: "#721C24", // Dark red text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #C82333", // Darker red accent color
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    This policy does not cover damage to the property insured
                    caused by specific excluded events as detailed in the policy
                    document.
                  </p>
                  <ul>
                    <li>
                      (i) Faulty or defective design, materials, or workmanship,
                      inherent vice, latent defect, gradual deterioration,
                      deformation, distortion, or wear and tear.
                    </li>
                    <li>
                      (ii) Interruption of the water supply, gas, electricity,
                      or fuel systems, or failure of the effluent disposal
                      systems to and from the premises unless damage by a cause
                      not excluded in the policy ensues.
                    </li>
                    <li>(iii) Collapse or cracking of building.</li>
                    <li>
                      (iv) Corrosion, rust, extremes or changes in temperature,
                      dampness, dryness, wet or dry rot, fungus, shrinkage,
                      evaporation, loss of weight, pollution, contamination,
                      change in color, flavor, texture, or finish, action of
                      light, vermin, insects, marring, or scratching unless such
                      loss is caused directly by damage to the property insured.
                    </li>
                  </ul>
                </div>

                {/* Exclusion Cause Group 2 (Blue Style) */}
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#D1ECF1", // Light blue background
                    color: "#0C5460", // Dark blue text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #017C8C", // Darker blue accent color
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  <ul>
                    <li>
                      (v) Theft, except from a building, and only if there is
                      violent or forcible entry to or exit from such building.
                    </li>
                    <li>
                      (vi) Acts of fraud or dishonesty, disappearance,
                      unexplained or inventory shortage, misfiling, or
                      misplacing of information.
                    </li>
                    <li>
                      (vii) Explosion, cracking, fracturing, collapse, or
                      overheating of boilers, economizers, vessels, tubes,
                      pipes, nipple leakage, or the failure of welds of boilers.
                    </li>
                    <li>
                      (viii) Mechanical or electrical breakdown or derangement
                      of machinery or equipment.
                    </li>
                  </ul>
                </div>

                {/* Exclusion Cause Group 3 (Yellow-Orange Style) */}
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#FFF3CD", // Light yellow background
                    color: "#856404", // Dark yellow-orange text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #E0A800", // Darker yellow-orange accent color
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  <ul>
                    <li>
                      (ix) Bursting, overflowing, discharging, or leaking of
                      water tanks, apparatus, or pipes when the premises are
                      empty or disused unless damage by a cause not excluded in
                      the policy ensues.
                    </li>
                    <li>
                      (x) Coastal or river erosion, subsidence, ground heave,
                      landslip, normal settlement, or bedding down of
                      structures, wind, rain, hail, frost, snow, flood, sand,
                      dust to movable property in the open or in open-sided
                      buildings, or to fences and gates.
                    </li>
                    <li>
                      (xi) Damage caused by or arising from any willful act or
                      willful negligence on the part of the insured or any
                      person acting on their behalf.
                    </li>
                  </ul>
                </div>

                {/* Exclusion Cause Group 4 (Purple Style) */}
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#E2D9F3", // Light purple background
                    color: "#6F42C1", // Dark purple text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #5F27CD", // Darker purple accent color
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  <ul>
                    <li>
                      (xii) War, invasion, act of foreign enemy, hostilities, or
                      terrorism, civil war, mutiny, rebellion, acts of
                      terrorism, and other related events.
                    </li>
                    <li>
                      (xiii) Damage directly or indirectly caused by or arising
                      from nuclear weapons material, ionizing radiations, or
                      contamination by radioactivity from any nuclear fuel or
                      waste.
                    </li>
                  </ul>
                </div>

                {/* Excluded Property (Green Style) */}
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#D4EDDA", // Light green background
                    color: "#155724", // Dark green text color
                    borderRadius: "8px",
                    borderLeft: "5px solid #28A745", // Darker green accent color
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  <strong>EXCLUDED PROPERTY:</strong>
                  <ul>
                    <li>
                      (a) Money, cheques, stamps, bonds, credit cards,
                      securities, and precious items unless specifically
                      mentioned.
                    </li>
                    <li>
                      (b) Fixed glass, china, earthenware, marble, or fragile
                      objects.
                    </li>
                    <li>
                      (c) Property in storage or being moved by a third party
                      unless detailed in the policy.
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

export default Firensurance;
