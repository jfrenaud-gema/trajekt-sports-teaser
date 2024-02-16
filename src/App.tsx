import { Flex, Text, Button } from "@radix-ui/themes";
import { ButtonMachines } from "./components/atoms/ButtonMachines/ButtonMachines";

function App() {
  return (
    <Flex direction="column" gap="6" className="p-6">
      <Text>Hello from Radix Themes :)</Text>

      <Flex direction="column" gap="2" className="w-40">
        <ButtonMachines state="sendToMachine">Send to Machine</ButtonMachines>
        <ButtonMachines state="fire">Fire</ButtonMachines>
        <ButtonMachines state="train">Train Pitches</ButtonMachines>
        <ButtonMachines state="sendToMachine" disabled>
          Loading
        </ButtonMachines>
      </Flex>

      <Flex direction="column" gap="2" className="w-14">
        <Button size="2" variant="outline" color="yellow">
          Reset
        </Button>
        <Button size="2" variant="outline" color="green">
          Reset
        </Button>
        <Button size="2" variant="outline" color="red">
          Reset
        </Button>
        <Button size="2" variant="outline">
          Reset
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
