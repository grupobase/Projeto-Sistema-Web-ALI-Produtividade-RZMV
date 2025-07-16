import { ProjectCard } from "@/components/project-card"

export function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        title="Redesign do Site"
        description="Atualização completa do site corporativo"
        progress={75}
        dueDate="15 Mar 2025"
        team={5}
        tasks={24}
        completedTasks={18}
      />
      <ProjectCard
        title="Implementação de CRM"
        description="Integração do novo sistema CRM com os sistemas existentes"
        progress={45}
        dueDate="30 Abr 2025"
        team={8}
        tasks={42}
        completedTasks={19}
      />
      <ProjectCard
        title="Campanha de Marketing Q2"
        description="Planejamento e execução da campanha do segundo trimestre"
        progress={20}
        dueDate="10 May 2025"
        team={4}
        tasks={18}
        completedTasks={4}
      />
      <ProjectCard
        title="Desenvolvimento de App Móvel"
        description="Criação de um aplicativo móvel para clientes"
        progress={60}
        dueDate="22 Jun 2025"
        team={6}
        tasks={36}
        completedTasks={22}
      />
      <ProjectCard
        title="Migração de Base de Dados"
        description="Migração da base de dados para uma nova infraestrutura"
        progress={90}
        dueDate="5 Mar 2025"
        team={3}
        tasks={15}
        completedTasks={13}
      />
      <ProjectCard
        title="Otimização de SEO"
        description="Melhora do posicionamento em motores de busca"
        progress={30}
        dueDate="18 Abr 2025"
        team={2}
        tasks={20}
        completedTasks={6}
      />
    </div>
  )
}
