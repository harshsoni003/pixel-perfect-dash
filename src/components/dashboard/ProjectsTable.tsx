import { motion } from "framer-motion";
import { MoreHorizontal, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const projects = [
  {
    name: "Chakra Soft UI Version",
    members: ["🟣", "🔵", "🟢", "🟡"],
    budget: "$14,000",
    completion: 60,
  },
  {
    name: "Add Progress Track",
    members: ["🔵", "🟢"],
    budget: "$3,000",
    completion: 10,
  },
  {
    name: "Fix Platform Errors",
    members: ["🟣", "🔵"],
    budget: "Not set",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    members: ["🟣", "🔵", "🟢", "🟡", "🔴"],
    budget: "$32,000",
    completion: 100,
  },
  {
    name: "Add the New Pricing Page",
    members: ["🟣"],
    budget: "$400",
    completion: 25,
  },
];

export const ProjectsTable = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Projects</h3>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">30 done</span> this month
            </span>
          </div>
        </div>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 text-xs uppercase text-muted-foreground tracking-wider border-b border-border pb-3 mb-3">
        <span>Companies</span>
        <span>Members</span>
        <span>Budget</span>
        <span>Completion</span>
      </div>

      {/* Table Rows */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55 + index * 0.05 }}
            className="grid grid-cols-4 gap-4 items-center"
          >
            <span className="text-sm font-medium text-foreground truncate">{project.name}</span>
            <div className="flex -space-x-1">
              {project.members.map((member, i) => (
                <span key={i} className="text-lg">{member}</span>
              ))}
            </div>
            <span className="text-sm text-foreground">{project.budget}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground">{project.completion}%</span>
              <Progress value={project.completion} className="h-1 flex-1 bg-navy-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
