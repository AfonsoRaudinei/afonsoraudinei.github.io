import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { pragas, stages } from "@/data/pragasSoja";

interface PragaChartProps {
  selectedPragas: number[];
}

const PragaChart = ({ selectedPragas }: PragaChartProps) => {
  const chartData = useMemo(() => {
    return stages.map((stage, index) => {
      const dataPoint: Record<string, string | number> = { stage };
      selectedPragas.forEach((pragaId) => {
        const praga = pragas.find((p) => p.id === pragaId);
        if (praga) {
          dataPoint[praga.shortName] = praga.data[index];
        }
      });
      return dataPoint;
    });
  }, [selectedPragas]);

  if (selectedPragas.length === 0) {
    return (
      <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
        <span className="text-6xl mb-4">🐛</span>
        <p className="text-muted-foreground text-center text-lg">
          Selecione uma ou mais pragas acima para visualizar o gráfico de intensidade.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-secondary/30 rounded-2xl p-4 md:p-8 shadow-sm">
      <ResponsiveContainer width="100%" height={450}>
        <LineChart data={chartData} margin={{ top: 40, right: 30, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
          <XAxis
            dataKey="stage"
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            label={{
              value: "Estádio Fenológico",
              position: "insideBottom",
              offset: -10,
              fill: "hsl(var(--foreground))",
              fontWeight: 600,
              fontSize: 14,
            }}
          />
          <YAxis
            domain={[0, 105]}
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            tickFormatter={(value) => (value <= 100 ? `${value}%` : "")}
            label={{
              value: "Intensidade Relativa (%)",
              angle: -90,
              position: "insideLeft",
              fill: "hsl(var(--foreground))",
              fontWeight: 600,
              fontSize: 14,
              dy: 60,
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "2px solid hsl(var(--primary))",
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 700 }}
            formatter={(value: number, name: string) => {
              const praga = pragas.find((p) => p.shortName === name);
              return [
                `${value.toFixed(1)}% (Pico em ${praga?.peak || "N/A"})`,
                name,
              ];
            }}
          />
          <ReferenceLine y={100} stroke="hsl(var(--destructive))" strokeDasharray="5 5" opacity={0.5} />
          {selectedPragas.map((pragaId) => {
            const praga = pragas.find((p) => p.id === pragaId);
            if (!praga) return null;
            return (
              <Line
                key={praga.id}
                type="monotone"
                dataKey={praga.shortName}
                stroke={praga.color}
                strokeWidth={3}
                dot={{
                  r: 5,
                  fill: praga.color,
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 7,
                  fill: praga.color,
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                fill={`${praga.color}20`}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PragaChart;
