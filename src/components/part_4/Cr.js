import { useState } from "react";
const Cr = () => {
  const [isLoading, setLoading] = useState(false);
  return <>{isLoading ? "loading" : "Done"}</>;
};

export default Cr;
