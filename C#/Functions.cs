static class Numbers {
    private static uint Min(uint x, uint y) {
        return (x < y) ? x : y;
    } private static uint Max(uint x, uint y) {
        return (x > y) ? x : y;
    }

    public static uint Mmc(uint x, uint y) {
        uint menor = Min(x,y), maior = Max(x,y), i = menor;
        for (; i % maior != 0; i += menor) {}
        return i;
    }
}

static class Strings
{
    public static string Substring(string line, int begin, int size)
    {
        string line2 = "";
        for (int i = begin; i < begin + size; i++) { line2 += line[i]; }
        return line2;
    }
    public static string Caption(string line)
    {
        string line2 = "";

        for (int i = 0; i < line.Length; i++)
        {
            line2 += (char)(line[i] - ((i == 0 && LowKeyChar(line[i])) ? 32 : 0));
        }
        return line2;
    }
    private static bool LowKeyChar(char character)
    {
        return character >= 'a' && character <= 122;
    } 

    public static string Reverse(string line){
        string line2 = "";
        for (int i = line.Length-1; i >= 0; i--) {
            line2 += line[i];
        } return line2;
    }
                                             // 0123456
    public static string Rotate(string line) // analise
    {
        string line2 = line[line.Length - 1] + "";

        for (int i = 0; i < line.Length - 1; i++)
        {
            line2 += line[i];
        }
        return line2;
    }
    public static string Repeat(string line, int number) {
        string line2 = "";

        if (number > 0) {
            for (int i = 0; i < number; i++) {
                line2 += line;
            } 
        } return line2;
    }

}