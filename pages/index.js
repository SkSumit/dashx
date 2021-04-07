import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Filters } from "../components/Filters";
import { Grid } from "../components/Grid";
import { loadState, saveState } from "../utils";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gridLoading, setGridLoading] = useState(false);
  const [filters, setFilters] = useState(loadState);
  
  useEffect(() => {
    setGridLoading(true)
    axios
      .post("/api/launches", {
        filters,
      })
      .then(({ data }) => {
        setLaunches(data);
        setLoading(false);
        setGridLoading(false)
      });
    
    saveState(filters);
  }, [filters]);

  if (loading) {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body ">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-centered bounce">🚀 </h1>
        </div>
        </div>
      </section>
    );
  }

  return (
    <div className="main">
      <Head>
        <title>DashX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero is-small">
        <div className="hero-body">
          <p className="title is-4">DashX</p>
          <p className="subtitle is-6">SpaceX Launch Dashboard</p>
        </div>
      </section>
      <section className="hero is-small">
        <div className="hero-body">
          <Filters
            filters={filters}
            setFilters={setFilters}
            
            allYears={[
              ...new Set(launches.map((launch) => launch.launch_year)),
            ]}
          />
        </div>
      </section>

      <section className="hero is-fullheight">
        <div className="hero-body">
          <Grid launches={launches} gridLoading={gridLoading}/>
        </div>
      </section>
    </div>
  );
}
