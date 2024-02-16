import { Flex } from "@radix-ui/themes";
import { ButtonMachines } from "./components/atoms/ButtonMachines/ButtonMachines";

function App() {
  return (
    <Flex direction="column" gap="5" className="p-4">
      <ButtonMachines state="sendToMachine">Send to Machine</ButtonMachines>
      <ButtonMachines state="fire">Fire</ButtonMachines>
      <ButtonMachines state="train">Train Pitches</ButtonMachines>
      <ButtonMachines state="sendToMachine" disabled>
        Loading
      </ButtonMachines>
    </Flex>
  );
}

export default App;
