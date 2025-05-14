import React from "react";

export interface IInputDetails {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}
export interface ISkillCard {
  name: string;
  Icon: React.FC
}