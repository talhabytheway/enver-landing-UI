import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin: 10px;
  @media (min-width: 768px) {
    height: 600px;
  }
 `;

// export default function Item(params) {
//   return(<>
//   <div className="flex content-center items-center w-full m-[10px]">
//     {params.children}
//   </div>
//   </>)
// }