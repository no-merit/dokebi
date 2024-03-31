package com.dokebi.dokebi.member.repository;

import com.dokebi.dokebi.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Optional<Member> findByMemberId(String MemberId);
    Optional<Member> findByMemberIdAndMemberPass(String MemberId, String MemberPass);

    Optional<Member> findByMemberIndex(int MemberIndex);


    boolean existsByMemberId(String MemberId);
    boolean existsByMemberEmail(String MemberEmail);
    boolean existsByMemberNickname(String MemberNickname);

}