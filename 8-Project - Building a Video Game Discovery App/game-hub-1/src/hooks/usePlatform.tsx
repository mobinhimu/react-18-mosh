import { platform } from "../services/platform";

const usePlatform = () => {
  return { data: platform, error: null, loading: null };
};
export default usePlatform;
