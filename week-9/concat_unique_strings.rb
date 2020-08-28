# Take 2 strings s1 and s2 each only containing letters from a to z. Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

# Example:
s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"
# longest(s1, s2) => "abcdefklmopqwxy"

def longest string1, string2
    new_str = string1 << string2
    new_str.split("").uniq.sort.join("")
end

p longest s1, s2