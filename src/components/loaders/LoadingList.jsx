"use client";

import { Container, Alert } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";

export const LoadingList = ({
  colCount = 4,
  rowCount = 4,
  isAuthorized = true,
}) => {
  const rows = Array.from({ length: rowCount }, (v, i) => i);
  const cols = Array.from({ length: colCount }, (v, i) => i);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isAuthorized) {
      setShowAlert(true);
    }
  }, [isAuthorized]);

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>
        <Skeleton width="10rem" height="2.5rem" />
      </h2>
      <Skeleton width="5rem" height="2.5rem" />
    </div>
  );

  return (
    <Container>
      {showAlert && (
        <Alert variant="danger">Bu sayfayı görüntüleme yetkiniz yok!</Alert>
      )}
      <DataTable
        value={rows}
        stripedRows
        showGridlines
        header={header}
        className="w-100"
      >
        <Column
          field="code"
          header={<Skeleton width="1rem" />}
          headerStyle={{ width: "40px" }}
          body={<Skeleton />}
        ></Column>

        {cols.map((col) => (
          <Column
            key={col}
            field="code"
            header={<Skeleton width="3rem" />}
            style={{ width: `25%` }}
            body={<Skeleton />}
          />
        ))}
      </DataTable>
    </Container>
  );
};
