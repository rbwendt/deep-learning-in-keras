for url in `cat urls.txt `; do echo $url ;curl $url -O ; done

