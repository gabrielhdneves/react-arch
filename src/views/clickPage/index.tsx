import React from "react";
import { clickApolloButton } from "../../modules/clickPage/actions";
import { ClickPageProps } from "../../modules/clickPage/types";

function ClickPage({ value }: ClickPageProps) {
  return (
    <>
      <button type="button" onClick={() => clickApolloButton("BR")}>
        Brasil
      </button>
      <p>country loaded local: {value}</p>
    </>
  );
}

export default ClickPage;
