import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, cleanup, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DaftarPengajuan from "../DaftarPengajuan";

afterEach(cleanup);

const LazyDaftarPengajuan = React.lazy(() => import("../DaftarPengajuan"));

// function Main() {
//   return (
//     <div>
//       <div>Lazy Component here</div>
//       <LazyDaftarPengajuan />
//     </div>
//   );
// }

describe("Render Daftar Pengajuan", () => {
  // beforeEach(() => {
  //   jest.setTimeout(10000);
  // });

  it("React.Suspense > Lazy Component > No Data", async () => {
    const { container } = render(
      <MemoryRouter
        initialEntries={[
          {
            push: jest.fn(),
            url: "/dashboard/pengajuan",
          },
        ]}
      >
        <React.Suspense fallback="Test loading">
          <LazyDaftarPengajuan />
        </React.Suspense>
        ,
      </MemoryRouter>,
    );

    // debug();
    // const element = await screen.findByText(/Lazy Component here/);
    // expect(element).toBeInTheDocument();
    const element = await waitFor(() => screen.findByText(/No Data/i));
    expect(element).not.toBeNull();
    expect(element).toMatchSnapshot();
  });

  // it("React.Suspense > Not Lazy Component", () => {
  //   const { debug } = render(
  //     <MemoryRouter
  //       initialEntries={[
  //         {
  //           push: jest.fn(),
  //           url: "/dashboard/pengajuan",
  //         },
  //       ]}
  //     >
  //       <React.Suspense fallback="Test Loading">
  //         <DaftarPengajuan />
  //       </React.Suspense>
  //     </MemoryRouter>,
  //   );

  //   // debug();
  // });
});

// describe("Render Daftar Pengajuan", () => {
//   it("Pusing awak kasi nama", () => {
//     // const myInitialState = "My Initial State";
//     // React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
//     // const onTableRowClick = jest.fn((id) => console.log(id));
//     // console.log(fetch);
//     const onTableRowClick = jest.fn();
//     const { container } = render(
//       <MemoryRouter
//         initialEntries={[
//           {
//             push: jest.fn(),
//             url: "/dashboard/pengajuan",
//           },
//         ]}
//       >
//         <DaftarPengajuan data={fetch} />
//       </MemoryRouter>,
//     );
// expect(onTableRowClick).toHaveBeenCalledTimes(1);
// const tableRow = container.querySelectorAll(".ant-table-row");
// console.log(tableRow);
// fireEvent.click(tableRow);
// expect(tableRow).not.tobeNull();
// expect(wrapper).toBeTruthy();
// const element = screen.getByText("Asep Sunandar");
// expect(element).toBeTruthy();
// expect(onTableRowClick).toHaveBeenCalledTimes(1);
//   });
// });
