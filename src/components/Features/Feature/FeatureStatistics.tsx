import { FeatureStatisticsContainer } from "./styles";

export interface FeatureStatisticsProps {
  statistics: TFeature["statistics"];
}

export const FeatureStatistics = ({ statistics }: FeatureStatisticsProps) => {
  if (!statistics) return null;

  return (
    <FeatureStatisticsContainer>
      {statistics.map(statistic => 
        <div>
          <span>{statistic.data}</span>
          <span>{statistic.label}</span>
        </div>
      )}
    </FeatureStatisticsContainer>
  );
}
