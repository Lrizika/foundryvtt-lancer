import { NpcFeatureType } from "machine-mind";

// TODO: Just use machine mind, where possible

export enum PilotEquipType {
  PilotArmor = "armor",
  PilotWeapon = "weapon",
  PilotGear = "gear",
}

export enum RangeType {
  Range = "Range",
  Threat = "Threat",
  Thrown = "Thrown",
  Line = "Line",
  Cone = "Cone",
  Blast = "Blast",
  Burst = "Burst",
}

export enum EffectType {
  Generic = "Generic", // Covers old/fallback/simple
  Basic = "Basic",
  Charge = "Charge",
  Deployable = "Deployable",
  AI = "AI",
  Protocol = "Protocol",
  Reaction = "Reaction",
  Tech = "Tech",
  Drone = "Drone",
  Bonus = "Bonus",
  Offensive = "Offensive",
  Profile = "Profile",
}

export enum ActivationType {
  None = "None",
  Passive = "Passive",
  Quick = "Quick",
  Full = "Full",
  Other = "Other",
  Reaction = "Reaction",
  Protocol = "Protocol",
}

export enum ChargeType {
  Grenade = "Grenade",
  Mine = "Mine",
}

export enum MechType {
  Balanced = "Balanced",
  Artillery = "Artillery",
  Striker = "Striker",
  Controller = "Controller",
  Support = "Support",
  Defender = "Defender",
}

export enum NPCTag {
  Mech = "Mech",
  Vehicle = "Vehicle",
  Ship = "Ship",
  Biological = "Biological",
  Squad = "Squad",
}
