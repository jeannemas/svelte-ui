<script context="module" lang="ts">
  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Table from '$lib/components/table/index.js';

  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card',
    },
  ];
</script>

<script lang="ts">
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content></Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Table.Root>
        <Table.Caption>A list of your recent invoices.</Table.Caption>

        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[100px]">Invoice</Table.Head>

            <Table.Head>Status</Table.Head>

            <Table.Head>Method</Table.Head>

            <Table.Head class="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {#each invoices as invoice, index (index)}
            <Table.Row>
              <Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>

              <Table.Cell>{invoice.paymentStatus}</Table.Cell>

              <Table.Cell>{invoice.paymentMethod}</Table.Cell>

              <Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
