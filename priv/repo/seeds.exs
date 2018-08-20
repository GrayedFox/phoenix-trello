alias PhoenixTrello.{Repo, User}

[
  %{
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@phoenix-trello.com",
    password: "12345678"
  },
  %{
    first_name: "Mary",
    last_name: "Poppins",
    email: "mary.poppins@phoenix-trello.com",
    password: "12345678"
  },
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))
