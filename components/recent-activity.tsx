import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Ana Pereira</span> concluiu a tarefa{" "}
            <span className="font-semibold">Diseñar wireframes</span>
          </p>
          <p className="text-sm text-muted-foreground">Há 2 horas</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>CS</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Carlos Souza</span> comentou em{" "}
            <span className="font-semibold">Implementação de API</span>
          </p>
          <p className="text-sm text-muted-foreground">Há 4 horas</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>MO</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Maria Oliveira</span> criou um novo projeto{" "}
            <span className="font-semibold">Campaña de Marketing Q2</span>
          </p>
          <p className="text-sm text-muted-foreground">Há 6 horas</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">João Silva</span> atribuiu 3 novas tarefas para{" "}
            <span className="font-semibold">Ana Pereira</span>
          </p>
          <p className="text-sm text-muted-foreground">Há 8 horas</p>
        </div>
      </div>
    </div>
  )
}
