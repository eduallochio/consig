import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
	return (
		<Card>
			<CardHeader className="flex flex-1 w-full md:max-[600px]">
				<div className="flex items-center justify-center">
					<CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
						Últimos clientes
					</CardTitle>
					<CircleDollarSign className="ml-auto w-4 h-4" />
				</div>
				<CardDescription>
					Últimos clientes nas ultimas 24 horas
				</CardDescription>
			</CardHeader>

			<CardContent>
				<article className="flex items-center gap-2 border-b py-2">
					<Avatar className="w-8 h-8">
						<AvatarImage src="https://github.com/eduallochio.png" />
						<AvatarFallback>DV</AvatarFallback>
					</Avatar>
					<div>
						<p className="text-sm sm:text-base font-semibold ">Eduardo Allochio</p>
						<span className="text-[12] sm:text-sm text-gray-400">teste@teste.com</span>
					</div>
				</article>
				<article className="flex items-center gap-2 border-b py-2">
					<Avatar className="w-8 h-8">
						<AvatarImage src="https://github.com/eduallochio.png" />
						<AvatarFallback>DV</AvatarFallback>
					</Avatar>
					<div>
						<p className="text-sm sm:text-base font-semibold ">Eduardo Allochio</p>
						<span className="text-[12] sm:text-sm text-gray-400">teste@teste.com</span>
					</div>
				</article>
				<article className="flex items-center gap-2 border-b py-2">
					<Avatar className="w-8 h-8">
						<AvatarImage src="https://github.com/eduallochio.png" />
						<AvatarFallback>DV</AvatarFallback>
					</Avatar>
					<div>
						<p className="text-sm sm:text-base font-semibold ">Eduardo Allochio</p>
						<span className="text-[12] sm:text-sm text-gray-400">teste@teste.com</span>
					</div>
				</article>
			</CardContent>
		</Card>
	)
}