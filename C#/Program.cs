string line = "analise";

Console.WriteLine(Strings.Reverse(line) == "esilana");
Console.WriteLine(Strings.Rotate(line) == "eanalis");
Console.WriteLine(Strings.Rotate(Strings.Rotate(line)) == "seanali");
Console.WriteLine(Strings.Repeat("tads", 3) == "tadstadstads");