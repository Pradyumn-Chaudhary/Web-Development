import {submitAction} from "@/actions/form"

export default function Home() {
  return (
    <div>
      <form action={submitAction} className="flex flex-col gap-5 m-5">
        <div className="flex gap-4">
          <label htmlFor="Name">Name</label>
          <input type="text" name="name" id="name" className="outline-none text-black" placeholder="Name"/>
        </div>
        <div className="flex gap-4">
          <label htmlFor="Email">Email</label>
          <input type="text" name="email" id="email" className="outline-none text-black" placeholder="Email"/>
        </div>
        <div> 
          <button className="bg-white rounded-xl px-4 text-black hover:font-bold">
            Sumbit
          </button>
        </div>
      </form>
  </div>
  );
}
