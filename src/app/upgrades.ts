export const upgrades = [
  {
    id: "clickMultiplier",
    name: "Manual Click Upgrade",
    basePrice: 10,
  },
] as const;

export type UpgradeId = typeof upgrades[number]["id"];
