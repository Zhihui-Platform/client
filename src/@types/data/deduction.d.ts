declare interface DeductionTable {
  id: string;
  deductee: string;
  deduction: number;
  time: string; // format: "YYYY-MM-DD HH:mm:ss"
  reason: string;
  status: "none" | "pending" | "accepted" | "rejected";
}

declare interface Deduction extends DeductionTable {
  deductor: {
    name: string;
    number: number;
  };
  description: string;
}

declare interface DeductionCallback {
  deductionid: string; // Mongodb will auto generate an id
  status: "accepted" | "rejected" | "pending";
  messages: {
    from: string;
    to: string;
    time: string;
    content: string;
  }[];
}
