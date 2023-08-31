{pkgs, ...}: {
  packages = with pkgs;
    [
      coreutils #for nodegyp, the macos version of mtkemp is not POSIX compliant
      jq #for ../scripts/compile-contracts-for-go.sh
    ];

  languages = {
    javascript = {
      enable = true;
      package = pkgs.nodejs_18;
    };
    typescript.enable = true;
  };
}
