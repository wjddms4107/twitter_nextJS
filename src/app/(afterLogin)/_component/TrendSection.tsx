import style from './trendSection.module.css';
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        {/* 서버데이터로 맵 돌릴예정 */}
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  )
}