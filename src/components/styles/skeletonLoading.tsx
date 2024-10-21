import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const SkeletonLoading:React.FC = () => {
  return (
    <div>
      <SkeletonTheme highlightColor="#f5f5f5">
        <div className="card bg-base-100 h-[500px] shadow-xl">
          <div>
            <Skeleton height={270} />
          </div>
          <div className="card-body flex flex-col justify-between">
            <div>
              <Skeleton height={20} width={`80%`} />
              <Skeleton count={2} />
              <Skeleton width={`50%`} />
            </div>
            <div className="card-actions justify-end">
              <Skeleton width={80} height={40} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoading;
