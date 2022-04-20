import sleep from "@/utils/sleep";
import { useMediaQuery } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { Prism } from "@mantine/prism";

function useSubmitForm() {
  const modals = useModals();
  const matches = useMediaQuery("(min-width: 768px)");

  const showFormValues = async (payload: Object) => {
    await sleep(1500);

    modals.openModal({
      title: "Submit values",
      children: (
        <Prism
          language="json"
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
        >
          {JSON.stringify(payload, null, 2)}
        </Prism>
      ),
      size: matches ? "xl" : "xs",
      centered: true,
    });
  };

  return {
    showFormValues,
  };
}

export default useSubmitForm;
