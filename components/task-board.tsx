import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TaskBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4">
        <div className="font-medium text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            Pendente
            <Badge variant="outline" className="ml-2">
              3
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Projetar wireframes para a página inicial</CardTitle>
            <CardDescription className="text-xs">Redesign do Site</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">10 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Implementar autenticação de usuários</CardTitle>
            <CardDescription className="text-xs">Implementação de CRM</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">15 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Criar conteúdo para redes sociais</CardTitle>
            <CardDescription className="text-xs">Campanha de Marketing Q2</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">20 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="font-medium text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            Em Andamento
            <Badge variant="outline" className="ml-2">
              2
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Desenvolver API para integração com CRM</CardTitle>
            <CardDescription className="text-xs">Implementação de CRM</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">12 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Otimizar imagens do site</CardTitle>
            <CardDescription className="text-xs">Redesign do Site</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">8 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="font-medium text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            Concluído
            <Badge variant="outline" className="ml-2">
              2
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Definir requisitos do projeto</CardTitle>
            <CardDescription className="text-xs">Redesign do Site</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">1 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Criar plano de projeto</CardTitle>
            <CardDescription className="text-xs">Campanha de Marketing Q2</CardDescription>
          </CardHeader>
          <CardFooter className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">5 Mar 2025</span>
            </div>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
