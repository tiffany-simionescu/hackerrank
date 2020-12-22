# Print the elements of array arr in reverse order as a single line of space-separated numbers.

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))
    
    print(" ".join(map(str, arr[::-1])))
