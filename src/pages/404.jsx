import { Col, Row, Typography } from "antd";
import React from "react";

export default function NotFound() {
  return (
    <Row align="middle" style={{ flexDirection: "column" }}>
      <Col>
        <img
          width={300}
          alt="Not found icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEQjYyRjsiIGQ9Ik0wLDQ1Ny41MzRMMCw0NTcuNTM0YzAuMDA5LTQuODI5LDEuMjU0LTkuNTY5LDMuNjE5LTEzLjc3MUwyMzEuNzI0LDQxLjEzNw0KCWM1LjA4NS05LjA2NiwxNC42OC0xNC42NzEsMjUuMDctMTQuNjU0bDAsMGMxMC40MDgsMC4wMjYsMjAuMDAzLDUuNjE0LDI1LjE1OSwxNC42NTRsMjI2LjQyOCw0MDIuNzE0DQoJYzIuMzc1LDQuMTY3LDMuNjI4LDguODgxLDMuNjE5LDEzLjY4M2wwLDBjMCwxNS40NTctMTIuNTI2LDI3Ljk4My0yNy45ODMsMjcuOTgzSDI3Ljk4M0MxMi41MjYsNDg1LjUxNywwLDQ3Mi45OTEsMCw0NTcuNTM0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQTIzMDsiIGQ9Ik01MDguMzgxLDQ0My44NTFMMzY1LjAyMSwxODguOTFjLTQ3LjMwNywxMjYuNzM4LTEzOC44NjcsMjMyLjA4Ni0yNTcuNzY2LDI5Ni42MDdoMzc2Ljc2MQ0KCWMxNS40NTcsMCwyNy45ODMtMTIuNTI2LDI3Ljk4My0yNy45ODNsMCwwQzUxMi4wMDksNDUyLjczMiw1MTAuNzU1LDQ0OC4wMTgsNTA4LjM4MSw0NDMuODUxeiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0RFNEMzQzsiIGQ9Ik0xOTQuMjA3LDM1My4xMDNoLTE3LjY1NXYyNi40ODNoLTE1LjQ0OGwxNS40NDgtNjguNjc5bC0xNy42NTUtMy44ODRsLTE3LjY1NSw3OS40NDgNCgkJYy0wLjU5MSwyLjYzOSwwLjA2Miw1LjQwMiwxLjc2Niw3LjUwM2MxLjcyMSwyLjEyNyw0LjMyNiwzLjMyOCw3LjA2MiwzLjI2NmgyNi40ODN2MTcuNjU1aDE3LjY1NXYtMTcuNjU1aDguODI4di0xNy42NTVoLTguODI4DQoJCVYzNTMuMTAzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNERTRDM0M7IiBkPSJNMjU2LDMwOC45NjZjLTE5LjUsMC0zNS4zMSwxNS44MS0zNS4zMSwzNS4zMXYzNS4zMWMwLDE5LjUsMTUuODEsMzUuMzEsMzUuMzEsMzUuMzENCgkJczM1LjMxLTE1LjgxLDM1LjMxLTM1LjMxdi0zNS4zMUMyOTEuMzEsMzI0Ljc3NiwyNzUuNSwzMDguOTY2LDI1NiwzMDguOTY2eiBNMjczLjY1NSwzNzkuNTg2YzAsOS43NTQtNy45MDEsMTcuNjU1LTE3LjY1NSwxNy42NTUNCgkJcy0xNy42NTUtNy45MDEtMTcuNjU1LTE3LjY1NXYtMzUuMzFjMC05Ljc1NCw3LjkwMS0xNy42NTUsMTcuNjU1LTE3LjY1NXMxNy42NTUsNy45MDEsMTcuNjU1LDE3LjY1NVYzNzkuNTg2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNERTRDM0M7IiBkPSJNMzcwLjc1OSwzNzkuNTg2aC04LjgyOHYtMjYuNDgzaC0xNy42NTV2MjYuNDgzaC0xNS40NDhsMTUuNDQ4LTY4LjY3OWwtMTcuNjU1LTMuODg0DQoJCWwtMTcuNjU1LDc5LjQ0OGMtMC41OTEsMi42MzksMC4wNjIsNS40MDIsMS43NjYsNy41MDNjMS43MjEsMi4xMjcsNC4zMjYsMy4zMjgsNy4wNjIsMy4yNjZoMjYuNDgzdjE3LjY1NWgxNy42NTV2LTE3LjY1NWg4LjgyOA0KCQlWMzc5LjU4NnoiLz4NCgk8cmVjdCB4PSIyNDcuMTcyIiB5PSIxNDEuMjQxIiBzdHlsZT0iZmlsbDojREU0QzNDOyIgd2lkdGg9IjE3LjY1NSIgaGVpZ2h0PSI4OC4yNzYiLz4NCgk8cmVjdCB4PSIyNDcuMTcyIiB5PSIyNDcuMTcyIiBzdHlsZT0iZmlsbDojREU0QzNDOyIgd2lkdGg9IjE3LjY1NSIgaGVpZ2h0PSIxNy42NTUiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
        />
        <Typography.Title level={4} style={{ textAlign: "center" }}>
          Halaman Tidak Ditemukan!
        </Typography.Title>
      </Col>
      <Typography.Text className="text-center">
        Maaf halaman yang anda tuju tidak ditemukan atau anda tidak memiliki hak
        untuk mengakses halaman tersebut. Silahkan kembali ke halaman sebelumnya
      </Typography.Text>
    </Row>
  );
}
