# Phoenix Trello: Now With Cypress!

This repository is a fork of [this][0] rather neat Trello tribute done by one [Ricardo Vega][1]. You can read more
about the frameworks he chose and take an in depth look at the development process in his multi-part [blog series][2].

This fork removes the Hound dependency and integration tests and opts for using the rather promising Selenium competitor
called [Cypress][3].

## Requirements

 * [Elixir version 1.3.4][7]
 * A [compatible Erlang version][4] (version 18 or 19)
 * [PostgreSQL][6]
 * [Node version 8.11.1][9]

I'd recommend using [asdf][5] to manage your installed and active Elixir and Erlang versions; just follow the excellent
instructions in their documentation and install any necessary plug-ins. You could also use it to manage your Node
installation if you don't like [nvm][10].

## Installation Instructions

To start your Phoenix Trello app:

  1. Install Elixir dependencies with `mix deps.get`
  3. Install Node dependencies with `npm install`
  4. Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  5. Run seeds to create a demo user with `mix run priv/repo/seeds.exs`
  6. Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`][8] from your browser.

## Testing

Welcome to integration tests written in Cypress!

In order to run a suite of tests you will need to first ensure you have a server running which has the required
seeds for tests to run (steps 3, 4, and 5 from above).

To run all current Cypress tests simply issue the `npm test` command and check the output in your terminal.

If you'd like to run the tests individually from the awesome Cypress test runner, navigate to the project root
directory from your terminal and do `npx cypress open`.

## Cleanup

If you find it a bit annoying that you can't delete lists, boards, or cards and want to start fresh shutdown your
server and issue the following commands from your terminal:

  1. `sudo service postgresql restart`
  2. `sudo -i -u postgres`
  3. `psql`
  4. `DROP DATABASE phoenix_trello_dev`

If you haven't stopped your server and restarted the postgresql service you might not be able to drop the table due to
active connections. Note that after this you'll need to run steps 3, 4, and 5 again from the installation instructions.

## License

See [LICENSE](LICENSE).

 [0]: https://github.com/bigardone/phoenix-trello
 [1]: https://github.com/bigardone
 [2]: http://codeloveandboards.com/blog/2016/01/04/trello-tribute-with-phoenix-and-react-pt-1/
 [3]: https://docs.cypress.io/guides/overview/why-cypress.html#
 [4]: https://github.com/elixir-lang/elixir/blob/master/lib/elixir/pages/Compatibility%20and%20Deprecations.md#compatibility-between-elixir-and-erlangotp
 [5]: https://github.com/asdf-vm/asdf
 [6]: https://www.postgresql.org
 [7]: https://github.com/elixir-lang/elixir/releases/tag/v1.3.4
 [8]: http://localhost:4000
 [9]: https://nodejs.org/en/blog/release/v8.11.1/
 [10]: https://github.com/creationix/nvm
