{ pkgs }: {
	deps = [
    pkgs.wget
    pkgs.nettools
    pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
    pkgs.nginx
	];
}