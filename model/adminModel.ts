import { iAdmin } from "../utlis/interface";
import { Schema } from "mongoose";

interface iAdminData extends iAdmin, Document {}

const adminModel = new Schema<iAdminData>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  addressName: {
    type: String,
  },
  password: {
    type: String,
  },
});