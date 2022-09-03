function enums() {
  // * enum: Symbolic name for a set of values / Allows to specify a list of available options
  enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice,
  }

  let employeeStatus: ContractStatus = ContractStatus.Temp;
  console.log(employeeStatus);
  console.log(ContractStatus[employeeStatus]);
}

export default enums;
