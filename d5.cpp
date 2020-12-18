#include <iostream>

int main() {
    int max = 0;
    
    for(std::string in; std::cin >> in; ) {
        int val = 0b0000000000;
        for(int i = 0; i < in.size(); i++)
            if(in[i]== 'B' || in[i] == 'R')
                val |= 0b1000000000 >> i;
        max = std::max(val, max);
    }

    std::cout << max;
}
