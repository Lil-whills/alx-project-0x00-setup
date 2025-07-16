import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="flex flex-row gap-3">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded Full" styles="text-lg rounded-full" />
        
      </div>
    </div>
  )
}
export default Landing