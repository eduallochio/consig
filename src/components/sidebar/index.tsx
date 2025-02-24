import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Fingerprint, FolderUp, Home, LogOut, Package, PanelBottom, Settings2, Store, User, UserRoundSearch, Users2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Sidebar() {
	return (
		<div className="flex w-full flex-col bg-muded/40">

			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">

				<nav className="flex flex-col items-center gap-4 px-2 py-5">
					<TooltipProvider>
						<Link
							href="#"
							className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
						>
							<Fingerprint className="h-4 w-4" />
							<span className="sr-only">Dashboard Avatar</span>
						</Link>

						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<Home className="h-5 w-5" />
									<span className="sr-only">Início</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Início</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<FolderUp className="h-5 w-5" />
									<span className="sr-only">Importação</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Importação</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<Store className="h-5 w-5" />
									<span className="sr-only">Lojas</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Lojas</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<User className="h-5 w-5" />
									<span className="sr-only">Clientes</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Clientes</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<Users2 className="h-5 w-5" />
									<span className="sr-only">Vendedores</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Vendedores</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<UserRoundSearch className="h-5 w-5" />
									<span className="sr-only">Supervisores</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Supervisores</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<Settings2 className="h-5 w-5" />
									<span className="sr-only">Configurações</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Configurações</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>

				{/* mobile */}
				<nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
								>
									<LogOut className="h-5 w-5 text-red-500" />
									<span className="sr-only">Sair</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Sair</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>

			<div className="flex flex-col">
				<header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button size="icon" variant="outline" className="sm:hidden">
								<PanelBottom className="w-5 h-5" />
								<span className="sr-only">Abrir e fechar menu</span>
							</Button>
						</SheetTrigger>

						<SheetContent side="left" className="sm:max-w-x">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="#"
									className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2" prefetch={false}
								>
									<Package className="h-5 w-5 transition-all" />
									<span className="sr-only">Logo do projeto</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" >
									<Home className="h-5 w-5 transition-all" />
									Início
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" >
									<FolderUp className="h-5 w-5 transition-all" />
									Importes
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
									<Package className="h-5 w-5 transition-all" />
									Produtos
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
									<User className="h-5 w-5 transition-all" />
									Clientes
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
									<Settings2 className="h-5 w-5 transition-all" />
									Configurações
								</Link>

							</nav>
						</SheetContent>
					</Sheet>

				</header>
			</div>
		</div>
	);
}

export default Sidebar;