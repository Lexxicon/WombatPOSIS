interface WombatProcess extends IPosisProcess {
  /** post a message to this process */
  notify(msg: any): void;
}
