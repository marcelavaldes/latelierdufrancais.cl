import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

const TableExampleCollapsing = (props) => (
  <div>
    <Header
      as='h1'
      textAlign='left'
    >
      {
        props.title
      }
    </Header>
    <Table basic='very' celled>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h3' image>
              <Header.Content>
                {
                  "$" + props.prices[0] + ".000"
                }
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as='h3' image>
              <Header.Content>
                1 Hora
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h3' image>
              <Header.Content>
                {
                  "$" + props.prices[1] + ".000"
                }
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as='h3' image>
              <Header.Content>
                5 Horas
                <Header.Subheader>Ahorras { "$" + (props.prices[0]*5-props.prices[1]) + ".000" }</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h3' image>
              <Header.Content>
                {
                  "$" + props.prices[2] + ".000"
                }
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as='h3' image>
              <Header.Content>
                10 Horas
                <Header.Subheader>Ahorras { "$" + (props.prices[0]*10-props.prices[2]) + ".000" }</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
export default TableExampleCollapsing
