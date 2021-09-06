import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "../Channel/ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
        channel="webdevsimplified"
        verified
        subs="100M"
        noOfVideos={200}
        description="you can find some of the best web development videos here on my youtube chanel"
      />
      <hr />
      <VideoRow
        views="1.9M"
        subs="100M"
        description="you can find some of the best web development videos here on my youtube chanel"
        timestamp="1 hour ago"
        channel="webdevsimplified"
        title="Lets build a Youtube clone using react Js"
        image="https://reactjs.org/logo-og.png"
      />
      <VideoRow
        views="1.9M"
        subs="100M"
        description="you can find some of the best web development videos here on my youtube chanel"
        timestamp="1 hour ago"
        channel="webdevsimplified"
        title="Lets build a Youtube clone using react Js"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBEVExcVFRMYGBcTGx0YGRgYGRkaGhkaGiAaGhgXGRgcISsjGx0oHRsbJDUlKCwuMjIyGiNEPDcwOysxMi4BCwsLDw4PHBERHTQoISgxMzIyMTExMTExMTEzLjExMTExMTExMzExMTEuMTEyMTExLjExMTExMTExMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EAEMQAAIBAgQDBQQIAwcCBwAAAAECEQADBBIhMQVBUQYTImFxMoGRwQcjQlJiobHRFJLxFTNTgtLh8HKyFiRDY6LC4v/EABoBAQEBAQEBAQAAAAAAAAAAAAACAQMEBgX/xAAsEQACAgEDAwIFBAMAAAAAAAAAAQIRAxIhMQRBUSJxBRMyYYGhscHRFFKR/9oADAMBAAIRAxEAPwD5riUyuy/dJHwNa2+Y6j9NflVvjI+szDZwrD3j9xVS0dR6/wBauaqTREJaoqXlGAazcGprBFZucj1H6afKpLDbD3j5/OspsR5fp/w1geyfIg/L9qWtx56fHSgN8I8Op5ZhPpz/ACqN0gkdCR8NKwanxvtk/ehv5gG+dAXLPEEGHKEfWAqqNAKm2HF0q07w66Agghz0qA8RulszkNCPbiAoC3FKkAKABvPuFQYbDvcJCCSqs51A8KDMx13gDauinBWYWGVoXEFEUt/iEutwCOS5Z1+8Krdk+lFRuIXTbFqRlECcozkKSyqX3KhiSB+wqA53YnVmYljAkkkySY8zXXw/B7LOVF7OEXvXClJFoBs+qswDqQsiTo4PIione1athrTL3joUYG4ztluKQ4IFtUUifvEggVjvuI12OY1phmkQUOVgdCDqIynXcH0qxh+HXmdU7tlzDNLDL4AYZ5aAQPXeBzqzYxYuLiBdvBe/8XssSbudXzAIsDQONx7QqfGcZRzczI7LdLzLAELcW2WCnWCLtoMNCI9a1JBt9iG7wO8ouOYCWndWaGnLbfu3uQBEA8pkwYBipRbtYVst62LrMEcR7IVhcEAn2gysjAxoQOhqHiHGGu5s1pIZmZQcx7vPBcLqAZImWBIk1UxeKu3TNxi2rMJjTMZYDoJ5bCjrsI33KwpW2XzqfDYRndLYBzXYyz4QQ2gaT9nQ6+RqSitSrf8AAXstxhaOW0WDn7pT2x5kDUxMDWrLcIv5sgym4Ard2p8XiZVA1AEy6zrGu9bTMtHMCnpWyWyTA1PQan4CuvjuDJbsl3vfWEEosblQhKFdTPiOugECd9NsTjv4a6yWECgd22ZiXLRluo0bD2iNBqD76NNGKSfBxNOtJHSsAVkCsKGahJpkNZy+dAa0rfTzrGYdKA1rIU9KZzQmgNsvmKxA61rSgNpHSuhwfhr3hdfOtu1h1z3bjg5VnREAGrO7aKo316Vza9BxQ5OGYJF0F+7iLz/ie2yWbc+iT/NQHJ4Xg7t+4tpADcuaKpZVzNEhQzELmOwkiTUGItOjMjqVdCVZWEFWGhBB2INe2+h7gaXcS2KusFtYGLhLEAG5qUJJ2VQC5PUL512O3nB8JisJe4naaLrm3eK/+2cuHYeak2y6mAZB6kUB8+xHCXXDW8SrK9p2KPlnNauCSLdwEaSviB2Pwnn16DsYcwxlk+xewl1yOQuWALtp/VWB/mNefoC7jdbVpugKH/KdPyqlV214sO4+4yt7j4apVc+U/scsWycfDZvd3nrr8dawfZHkf1/4ay+wPu+H9RWF2PuPw0+dQdRb5jqD+WvyrANbWhqKwUjeKAXRqakv6rbP4cv8pPyIrW4BoZ3H6afKpJHd7ey//cP/AMUBrhLio4ZkFxRMoSQDIIGo10Jn3VNZ4leW2ttT4VGmms5u8DTyZWkgiCJPWosHbNy4iCBnYLMbSYnziupi+FW0Uubj92qjMoyNcVyyrkMEKIDqTrpMa71SvsS3G9yicfeJZmILMjW5IC5VeQ2UJAkhmEkH2jVMgDc10mDNZs3Vt5jadrbZVgEgo1rOUgyc5UGZOXernEMOiNiLYe0jPczK1wq82WDyitDEOGKyNGMeVKZikkca9ZKMUZTmUlSPMbjTerb4ACz3hdQ5iLREPOdrbAydCAFbbZvKum3F1uXLXdytwhLRh7ltGa6E7x3ZGDAi4NYMFQv3dfonFOwvBrbD+Ie7ncSTmeGI0JGjc+RJOupNY1TDmox1Sde58wt8EfvHt3LgQWgC7QQBLZI+syAgHWQYgaTWcJhEcWQ2UIl5rVy5bAgoe7KOXA1B8cMetfUzwjgnhi9cARSoWWYQxDEEOpkSAYO0CIrnYns/2dXMXxF4C6fF47sMd9QqwdZNVt2RxjnxydKSv7NHgr2FtI1xUtrbcrbKjEBVES4ulBcZo+wRmOaA0cq0scUX6h7lwsbC3ENqGAJIu92wIAWPGikzOle4HAuy3+Pc/mu/6KmTsTwfF23TA4hxeRcy5ixWdhmV1BKzoSuokehxtrsdkk+58/xHGlYhhZgksziTlJe0bNyJk6rlbXmD1qA8WvBbaqcotq6glmcnvFCP7ZOUQBCiADrVC+jqzI4KujFWU7qykhlPmCCK9b9GvZBMabl2+7W8NYHjZSAWeMxXMQcoVdWP4ljyzUzdKPNXeI32z5rz/WmXAMBjoCSBpsAPdVUkeZ9a+pf2F2W/x7n817/RWV4D2XJgX7snT2rv+is9Q1RXc+W5vIVqWNfXf/CPZ3/Fvfzv/pp/4R7O/wCLe/nf/TQ5f5OH/Zf9R8hpXufpR7IYfBLZu2HcpeJXJc1ZSBmDKYBiNwdQY6wPDUO4pSlAKUpQClKUAr0PCWTE4RsIzql6w7XsMXIVbiuB32HzHRWOUOs7kEaV56lAev7MYR1w9xDjcAtrGoouWrmLFu6hU5rbZchCup3UyCNDyIWOCsmGuWU4hwwd+yteb+MBLrb1tWwMnhUMSx3JOXUAQfIUoD0GAK4bCXbjMpvY201m0gIY27LEd9duAezmC5FB19o7V5+kUoC7wnUun30IHqNRVKu3xHKmKS4pQi6Lbxb9gFgFcDQaZgx0rk4u3ldl6MR+elW94I5R2yNeUmYX2T5H9dPkKWmMx1kfHasWuY6g/lr8qwoIM9Kg6mCazd39dfjrWXQAnXnWXiB8PhQGp9keRPy/3qXD6rcH4Q3vUj5E1oraHTofl86wrnrE6dN+vlQGbDMjK66MhDA9CDI/OujiuMXCVZC1soCNHzCGyyAMo08I3LHRddBXPv2GWCYhpgghgY3gg1FW20Y0mbs0ySSS2p8z1PWtQRyFYpWGmS3Kvs/ZTiP9qcOKOZxWEgEndtPA/wDnUEH8Snyr4vXc7D9oGwOLt3hPdnwXVH2rbRmgcyujDzWOZoc8mOOSDhLhnroqLFWQ6lTz/I8jXp+23DlV1xFuDbv+KV1GYiZB6MNfjXnRVJnxubHLp8rj3T2/g8pcQqSp3Ghq72e4o+Fv27ya5D4l++h0dPeNuhAPKrHHcN/6g5aN8j8vhXIrunaPo+mzrLBSX59z2f0o9mGxF6xjMEucY4pbaNhcYfV3G+6pUQx5FBzJq922vW8BgrXDbB1KzeYaEgmWJ6F3kx90RsRUf0b9rEw9q7Zvt4batctdSd2tL5kmR5lq8XxXHXL965ecy91sx6DkFHkAAB5AVyjCpHtlO4launwPDSe8Ow0X15n3VQw9ouwUbn8upr01i2FUKNhpVzdbH43xHqNENC5f7G8V3exnC++vSw8FmGadifsr8z5DzriWkLMFUSWIAA3JOgFdX6R+JDh+AXB22+uxQOdhuLZ0uN79EHlJ3Fcmzx/DOl+dl1S+lb/k8N9JfaT+NxbMhmzZm3a6ET47n+cif+kLXl6UqT6sUpSgFKUoBSlKAUpSgFKUoBSlKA3NtgA2UgHYkEA+h51Z4wPrA3+Iqt8RHyra8wNuHNvMkKmUktodcxGhXLz8hWMX4rNpvu5kPu1H5Vcfpa/JyntOL90VLR1FYIrFb3d/XX461B1MXOR6gft8qfZ9D+v9KH2R5SPn+9LfMeX6a/vQC1vHUGta2QwQehowgkdKAzeuMxlj5AbADoByFLVtmMKpYwTABOg1J05AVi5yPUD9vlV/gIBd7eua9ae2m0ZiJAbnqVAEcyKApPYYIrkQrzlMjXLoTG8TpNZt4e4ys4Riie0wUlV9TsKuYohsPbAhWsM6MhYZjmytnCmD7WYECYgda34PxG3aRw1sszZgCMuqujW2UlgSo1mV1MQdK1GN1wapwTEZwjKFMM2+aMmXOCtvM2YZl8MT4hyqbBcAd4YuBbYDx8gxfuypUwRBzT6edQXeKsxkoh8fea5vaNtbbGQQdcgbfeocRxK++cNcMXC7Mo0BNwqz6dCyKY8vWt9JPqPrn0f4uzesNw1nZjaRmts4MhVYgqGKrmKNlOmwfLrlJrjYqwyOyMIZCVI8x8q8Bw3jF+1ft4hbjM9lgVLsToJBQkz4SpKnyY19i7SLbxWHtcQsarcUZhzHLX8StKn3dKy9z8r4r0nzMfzFyufY8s6ggg6g6GvNYywbblTy2PUcjXp6ocYw2dMw9pNfUcx86uDpn5Hw/qPlz0vh/ucGlKs8Pw3eOByGrenT312PoJzUIuUuEdLgmGyrnO7beS/7/tXSrAqzw3BveuJbTdzE9BzY+QGtcG73Pl8k5Z8t929kd3sfhbdtLmNvHLbsKxBP4RLNHOBoPM9RXyPtPxi5jMTcxDyDcPhX7lsaIg9Bv1JY86959MvGktonDbJhECvejy8Vu2fOfGf8vnXzCoPruj6dYMSiue/uKUpQ9IpSlAKUpQClKUApSlAKUpQClKUBYGEeWBGUoATm89QNJ1NSYfxWLg+4yuPf4TUyYxVCwzyUVHy+EgqZUq066Qp02mteHvnuXBEC6HgdCdQPdVQ5rycs20dXhpnPrd9gfd8P9iK0rYez6H9f6CpOoXY+4/L50tbjz0+OlLW8dQR+351rQCtru89QDS7ufj8daNsPePn86AMdB5T/AM/Ws27TNoBP9Cf0B+Fb4Tu831kxGkbTyzRrHprVmzeFsowIP1uc5ZjKsQADrHifetXJj42KFW1wql7a5vDdAMnw7kqRz1lSPhW+JxpkZGzELBd0Us0FiD4pIhSBvyqBcRogyg5DIJnYmcpg7TrVVFMm5NG6YQ5C5J8JhlUAkARJOum+mnLlW+LsWhcIDMiQGWRmJDAMI20gjc1FdxbksfCO8ktlUCZ313APSagZyYBJMaCSdB0HSjceyCUu7OpbS0EDgIRbNpiT7Z8TLcVlk6ary+Ote3+iHtIgu3MFebMmJY90T7OaIKR9kMoEeY6mvmwdiuWTlGsSYHnFS4exdzApKshzBpy5CkNmzHYjRpo5XskZpXc+ocb4e2HutaOw1U/eU+yfl6g1Rr1IxH9o4Bb+UDE4eUuqI9pQM4EcmEOvkY5mvLVKPkuv6b5GV1w90ee4rhsj6ey2o+Y/51rrcLw3dpr7Tan5D3fvU920rRInKZHqKkq3K1QzdZLJiWN/n7iK9Rw68nD8Fcx10SzLFtObT7CjpmMEnkonrXK7M8MOIvKp9keJz+Ecp6k6fHpXm/ph7RjE4kWLZ+pwhKabNd2do6LGQf5+RqGz3/COl1S+dLtsvfyeMxmIuXLj3HbM9xi7sebNqT5enKoaUrD6IUpSgFKUoBSlKAUpSgFKVtbtljCgknkBJ01OnpQGtK3NtsoaDlJIB5EiJE+Uj41tasEkA6AgtJH2QCSfPagIqVcuYBoUqQ2YIYmCM65hM6AaNz5eddDg+Fs5D3qqzZt806QukqY61ShIhzSOUlkZM5bZgGUDUAz4tdOURU65bd20yzBCt4okZienl+tV7F7KrrlBzgDWdIMyII1mKjuOWgnkAB6KAB+QrE6dmyVxa8kmNTLcdejH4cvyqO3zHUfpr8qtcX1dX/xEVvfEH9Kq2jqK2SqTRmN3FP7BTBB6UcQSOlYIrN3eeoB/f86ksPyPl+mnypOkef8AX5U+z6H9f6GtsNkzDPOX8O/l7qAxatsxhRJJA95IA/MgVqRG+lWrlwKrFSss6kQCICgnY6jUj4VPjuIy02ySZc5nVSwDNmVQTMAa9N61JUY27KpsKO7ObwvuSIykGGGk8o1jntW/8EYua622KlRBMLuxkgxvqAdjtUXfnLlKhvEWBMzJjMNDEGBW93GXGLGQM/tZVUTvPKdZM9a30mbkuKsWgwIzIjIrAkZ5JAJAGkQZ58qmRLfdFlCnIFaTHeEi5BBWT4SjL5VzCxiJMDYch6VnO0ZZOWZiTE9Y60UlfBji6W50rfEFDuSWy55XKBDIM4FthpCkMOsRtWlrHpADIdRDkmQfqza0AgifCTryrnUrdbGhHsPo57VthsYDcIWxfhLg2CbC3dJ3OWIJJ9ktXtO2HC+4vEqPBclk6A819x/IivjZFfY+wHEhxHh7YW4f/MYQDIxOrKARbeeexRt+R5iovezydf0qz4qXK3X9HGFYrZ0KkgiCDBB3BGhBrv8AYvhwe4bzwLdjxEnQZhqJPRR4j7utUfK4MEsuVQXI7SY/+y+HeExisXKr95THif0tqfTMw618VArv9ve0Rx2Le6J7tfq7SnlbBMMRyLHxH1A5VwKk+0xYo44KEeEKUrIU9DQ6GKVaxGEyIGLCTHg+0J7wGfMFIP8A1CrHC+HLdtnx5bneKiggkMWV2VdPZJKESfLSi34EvTyc2sgflXXwPDbDNaUs5N20bpAEAwrxbUAFi2ZNwNdgJqS7cS1bv2lWB3tkxdDC4UhyVK5h7JI5AwdYO1aSdXY5OGw1y4YRS2w5c9Bv1NT4Thl24oeMqMYztMc492kVLxHG2/D3INuPayoLeaCCp0d2MEc2qO/jg1hLQQDLEtqToX2kmPaG0c65uzqtPcifBtmIQh4AOhEmVDQFmTExpzBq/ieG2yoa0QyBGY3BcVyzraa73bWgAbR8DgTOg5xXKS4wBAMZt43I6TvHlU/9oXoQB8vdkFcgVDmAyhiygFmiRJk6nqa0k739k2QgDW3Itm4Wuzlyju7N5FuCNc2coNRE6Vm+mES/ay9yqKzLdBOcZIQEmcxLZu8iNa8xddmJLMWJ3LEkn1J9B8KmfCXFAJUwdo1+yr7D8LKffWii1/GxYW2brMbNwsoAJtOrC3uGIiCrHVftcqr3MVmznLDOACQSdJBPtEnkB6TVWlDCxexTMgQhYAUSBqQgIXMecSagDGsUrdzKRNgsmdc4lSQDrG5iZ8t6u/ww7lgV8SZwWy80Kky+4JUwF2MVzkYgggwRqCOVbgXLjGMzsdTuxMczWGk+I8Vi233SyH9RVOpReIQppBIbzBGlRVUne5zxxcU0/L/U3u7+uvx1rDbD3j5/Oj7D4fD/AGig2PlB+XzFSdAmx+Pw/rWtbWt/XT41rQClKUApSsnryoD230cdibWOtXb9+89u3ZbJ4MoaQquzMzggKAw5ddo19IPow4bcDLh8ddNwKSuZrTqOUsqopKyRsRvXL+g/HtbxV7CODlxFvNB++nl+JGaT+AV6Pgc4XHi2dsxtmeat7B95yGlHj6nqZYZQ22bpvweN+j7sOmMW/cxN5rVvDubTZMs94oBeWcEBVkctZ5Rr6VPov4bdDLYx103AJEtadR0LKqKSJ6EV6ftTZt4XCXEtiDibrO3m1xi7n00j31r2KtCxhbmIZSc0tA3KpO0+eb8qCfVNZ1iS2StvwfAL9pkZkbdGZDGozKYMHnqK6XZLjTYPE28QsnIYdR9u22jJ8NR+ILX2jhXC+E4xXQYG2otMraW0QyeYKdcoB6iJmt778NtX2wwwNsFyqNltWgrd4APF1ENBmh1fUY9KnezdJ/cpdrOF949vEWBmXE5dhHiYSrRyBG/QgzvXN+k3HphcInDrVwC7iMveHX+7ZoYnpmbT/pBHSvY43iGFwFsW1U8ylpfsjyn2VmY9TGg04N7jmAxLRisGhBI8ZC3CvINmgMsdV1o7PJF9Lgzyk2lJ9vH9WfHP4BFzFnLKqFvAIJKuLTL4toJmddK9z2F7D4PEYO3i8VddUJdQoZVUw5TM7ZZ1YGBPTXWBzPpV7OvhLq3UuF8PiJyHTwEnO1slYDAzmB3MGZIk+z7Dm0OAWu9DFA1yQpAb+/uRqfOKlJ9z9DNkUYOUeyvfg5faPsNgbeDxF/DXi620YsGFtwCqj2WVQykaNExqetfP8PxJTfUu31YRQysYHhVSQo694oIjc19x4FawVzB3kyOLDFhcDnUjKubVdYiPPeuQnGeHW/BZ4fayD8FtZ84Cmfea3SedddCEIyyNK/FnxBmJJJ3Op9TvUuHxNxPYYr4lfSJzJOQg+WY/Gvr3FuyvDuI2XfC2hh8RbExbVVDmDCsghSGjRhBB36H5tg+HK/ct3TFXtOSCCCbiF5UZYzMQAQsgxz0qkmd1kjOKlF2mcZmJiSfCIHkJJgdBJJ99YfQkHQgwQdCDzB8673EbeGti5bTuyw7wq5h2zK9trQnVYKMy7QYMzFMRxwC89xSbnehTAJtm2dSykhZOpPskDzPLWqNTs5bcOuQkQTcIAAOuqLcBM6AZW/I1quDYgkFSBn1BBB7tO8aCND4dqjt3YcProZ0Yg+gbcetWbnE7hLHwjP1GYjw92SGaTJXQnnXPc6rSZXAqHZCzMbalnVQAZAByoTM77xyOhqYYS0LIco5M66xlh4yOZEEp5TLDkKoPi7pyy7eD2dYI5bjXYRUR1MnfrSmLXg7OewlxtUCuonLlzJqQVUqHVjEHcTpqNa5VvEMCCSWy7DMw2EDUGRoANOQqKlakY5WSYi8zsWYyT8tqjpStJFKUoBXTN8EIzOpLKbbgkyAGzofAJEaD3CuZUtqwWUkFfCCcs+KBqSB6foaAzjbga47DZmJHLcztyqGrWPwZtxJBBzCdtVMMI+fMEVVoDYez6H9f6Ut8x1B/f5Ut8x1H6a/KsIYIPnQAGNelZuCCfWjCDHSlzkeoH7fKgJsPh5AdtLYIBPXaVXzjnsKlxOBVT/eqACyywYHMhhgAoM7gzpvVRLjCYYidDBIn1ra/fdzLsWI6mqTVbktO9jpnD2SqMQAGVRnmAzQ9snLyhlVveZ3qK7eUK9sOoB7thlEjOFi4uYD72s7aVz8hjNGkxPnofmKlw+FdzAEaMfF4R4RmIk84I+IqtXhE6a5Z0uFccNi/bxAzsyd2WEgHwFCQpMyGykEQPbPrX1nt5aBe1ibZlbqghh1EMjT5qR/LXxhMGSEIdZuObcTsZUTI0jxf1r7F2IT+M4QlhXVrmHIVC0iFVj3ZI1IGSU/ympdvdnm6zAsmFxjzyvdGO12POJewiakopj8VyPD/ANtet4naW3g7lpT/AHdkj/4kAn1iuJ2e7K3rV9LlxkKpJhSSZiBuo2391UuC9qMJdxmMw9y6F/iHyWy2ZcwCKgCFhEMNtpIJE5hWHn6XDkanPIqlLb8JFv6MTrf/AMn/AN653GXB4mCCD9baGnUZAfgQR7qsJ2UxyMe7uqAdJDskj8QA/LWpsN2QvpetsroURkYySGOUgtpBG8xr0oeJY87xQxaH6ZW3+Tm8fNxuINlQMwZQitqDCggQSNOcVZ4zh+I31AuYdRlOhXKD6A5tj08hXW7RcEGIuG5h7iC9aIW4obUMAGWSuqtlKnXll2qjd4DxHEFVv3AEU8yD7wFGp9aWbk6bIpzTi3btVVP38FnFdnTiuH28PiIUo8+IZoCllEQwg92SAZ089q1x/CRheFtZVlZVeVIXKIe7mAiTqAYmdSJ51P2h4P3uHtLZuJls5pd2000YlgCJkGelUcfjLK8ONgXUa4hVSFJMnOGJWQCwjmBFYe3NkcMUsUlSUdm3y64LPY7C97gb1uYzswnocq6/GuZhcPxDChglsMpOoCh1blsviGnpXR7KYFbuAuI5yrccw22vhAInfxCI57VXw/Z7iNjMtm6oVjyMT5wRoY6Vp5Hik8eKSi9lynv7UXuxfE7Vwsi2EtXAsyqiGAiZ56EjSffXwPiq3Vu3LV1y72ne20kkZkYq0A7CQdK+44exa4ZbfFYq8oYqVVVMlj7WVZgu5gemsmNR8Lx2Ja5duXG9q873GA2DOxcgeUmsP1eiWRYUsipkNKUoeoUpSgFKUoBSlKAUpSgFKUoBU+GuqocFSS4iQ2WBuRsd9Ph51BW9mJEqW/CDEnlrB50BNi8W1yMwEjUkT4jCrJ100UbefWoblplCkjRhI8xVx7CEXVRSTbIIYEk5ZysumkAnfyrS94rCH7jMvx8Qqoq0yJycWvu6Kto6j/m+lYIrFbXd/XX461JYu7+sH9/zodh5SPn8zRth7x8/nRdj7j8vnQG+FVC3jaB79TyEgGPWDV+61o2xOQlAQMrHPIcFQCdcuRiJjlXNQSY61qTWp0Y1Z0sHjkUEZWVSVOVSWDQHDK5Y7EMPhtUbY/2SF8SkMSTIJyBGAAGgYAE69auXuzl9TlBViWQDLJUq6XLmcGJgC2wIiZHmJgu8HdVuszD6jLnCglhny92QDGhDMdYjIQQDFVrdUToV2UhiCAVUAAnMBuVI5qx1BrdcffDFlu3EYiJtsbZjUx4I0kk+81LxzD27d0i2HFtgrKX5h1DjKeYAYDnqDVGptlUi3c4niWBDYi8wO4a7dIPqC0GqrkmZMzvOs+s1ilYadC3xvGquRcXiFXbKL90LHTKGiKjXiuKGgxN8DoL10D4Zqp0oCfC4u9bcvbu3Lbnd7bsjmTJllIJ11q7jO0WPuLluYu+y7FTdeCOjAGG99culAet+jztkcBmtXLfeYa6ZdBlzKxAUsgbRgQACpIGg1Gs+2Pabs2fGS4O+TJiN+mgy/AxXxylDnPFCf1JP3VnuPpC7cLi7S4XDWzbwykFgwAa4VMqMokKoPiiSSYmIg+YscexyDKmMxKrsAt+6APQBoHurnUodEq2RLisTcutnu3HuPtmuOztHTMxJioqUoBSlKAUpSgFKUoBSlKAUpSgFKUoBW1typDAwQZB6EbGtaUBOGu3D9tiw2EkkDyHKpcKJtXU5iH/lMN+VSZ1K2hcuyJJbViwBgBIjQQg97baUwLhr7ayLuYExE5gTty1qoc15Oeb6W/G/6nPrZ9gfKPh/tFYis/Z9D+v9Kk6AeyfIg/8APypa6dQf3+VLfMdQfy1+VEMEHoaAKY16Vi4IJHnWWEEjpUhw7ZO8Ox0G/i5GPTzoC+vH74XIuUAi3uMxm0gtyJ08SABgZBFU2xtzUKQimfDbARdVyHReq6a9T1NW7OCRs6ANKOq5hylTLNP2Q6Hp7W9RYJrQzAMGLIf7xQqZgVZROaeUct6pRJckU8zNlWSeSiSYnkBy1rZcO5VmCnKmjGNpk6/D/k1evXrShjbaGGiQDMrcLK2bpkJXroKr4jFKzXdGZbuupAKmZGusgDT06VulLlmam+EFwFyYIC6TLEAASo16GWXTfUVpcwrBS0iFOVhOobYrB3PpNb38czAjKBmnNE+ItlzNrt7CnTnUF+8zmWMmSfLUyYHLU1ktPY2OruR0pSpKFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoDLVilKAms2cwPiAIBOUzJCjMdYgaDmala2LZt3ASQTIkQfCROxPL31mlbHkmW8TTiSZbrjzn46/OoLfMeX6a1mlJfUzMW8VfgxbOo9awRyrFKws2u7z1g/vRHYbEidxOh9RzrNKAZmY76sdfMn+tYS2xMAEnyE+X6kD30pWmMtLw27BkQQVAViBObNESd5WI8xW2GwALIHaA8DwySrOua2DMDXyJ2NKV00o462R2LNoqrMWhrmSdAFXwnMd9YJ08qt91ZUwygFsoILFigJuKxUg67W257+dKVSiqDk7KWIuIQoCgN9pgMoPkFmPfzqvSlcDuKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQH/2Q=="
      />
      <VideoRow
        views="1.9M"
        subs="100M"
        description="you can find some of the best web development videos here on my youtube chanel"
        timestamp="1 hour ago"
        channel="webdevsimplified"
        title="Lets build a Youtube clone using react Js"
        image="https://miro.medium.com/max/1000/1*KDMx1YspSrBcFJG-NDZgDg.png"
      />
      <VideoRow
        views="1.9M"
        subs="100M"
        description="you can find some of the best web development videos here on my youtube chanel"
        timestamp="1 hour ago"
        channel="webdevsimplified"
        title="Lets build a Youtube clone using react Js"
        image="https://miro.medium.com/max/2000/1*ZEUZtH8wL9vUDLrn5guwOQ.png"
      />
      <VideoRow
        views="1.9M"
        subs="100M"
        description="you can find some of the best web development videos here on my youtube chanel"
        timestamp="1 hour ago"
        channel="webdevsimplified"
        title="Lets build a Youtube clone using react Js"
        image="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png"
      />
      <VideoRow
        views="1.9M"
        subs="100M"
        description="you can find some of the best web development videos here on my youtube chanel"
        timestamp="1 hour ago"
        channel="webdevsimplified"
        title="Lets build a portfolio clone using react Js"
        image="https://static.wixstatic.com/media/3edabd_d27e12f7478644bcb31eb503e51458fc~mv2.png/v1/fit/w_1000%2Ch_608%2Cal_c/file.png"
      />
    </div>
  );
};

export default SearchPage;
