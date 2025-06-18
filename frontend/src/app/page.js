"use client";
import Image from "next/image";
import Form from "@/components/Form";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Login></Login>
      
                  <div>
                  <button
                    className="btn btn-7xl btn-success"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Create Code
                  </button>
                  <dialog id="my_modal_1" className="modal backdrop-blur-sm bg-black/30">
                    <div className="modal-box w-150">

                      {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                      <p>Code Creation Stuff</p>
                      <div className="modal-action mx-auto w-fit">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn-ghost">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  </div>


                </div>

  );
}
